###########################################################################
# assembler - Assembler and Interpreter for hypothetical computer
#   
#   Usage: awk -f assembler program-file data-file
#    
#   Assembler and interpreter for hypothetical computer (both inspiration and
#   implementation come from Jon Bently).
#
#   The computer has a single accumulator, 10 instructions and word-addressable 
#   memory of 1000 words.  
#   
#   Word of computer memory holds 5 decimal digits. 
#   First 2 digits encode operation and last 3 digits are the address.
#
#   ------------------------------------------------------------------------------------
#   |  Opcode |  Instruction  | Meaning                                                 |
#   ------------------------------------------------------------------------------------
#   |    01   |      get      | Read number inaput from accumulator                     |
#   ------------------------------------------------------------------------------------
#   |    02   |     put       | Write the contents of the accumulator to the output     |
#   ------------------------------------------------------------------------------------
#   |    03   |     ld M      | Load accumulator with contents of memory location M     |
#   ------------------------------------------------------------------------------------
#   |    04   |     st M      | Store contents of accumulator in location M             |
#   ------------------------------------------------------------------------------------
#   |    05   |     add M     | Add contents of accumulator in location M               |
#   ------------------------------------------------------------------------------------
#   |    06   |     sub M     | Subtract contents of accumulator in location M          |
#   ------------------------------------------------------------------------------------
#   |    07   |     jpos M    | Jump to location M if accumulator is positive           |
#   ------------------------------------------------------------------------------------
#   |    08   |     jz M      | Jump to location M if accumulator is zero               |
#   ------------------------------------------------------------------------------------
#   |    09   |      j M      | Jump to location M                                      |
#   ------------------------------------------------------------------------------------
#   |    10   |      halt     | Stop execution                                          |
#   ------------------------------------------------------------------------------------
#   |         |    const C    | Assembler pseudo-operation to define a constant         |
#   ------------------------------------------------------------------------------------
#
###########################################################################

BEGIN {
    srcfile = ARGV[1]
    ARGV[1] = ""                                                # Remaining files are data
    tempfile = "asm.temp"
    n = split("const get put ld st add sub jpos jz j halt", x)
    for(i = 1; i <= n; i++) {
        op[x[i]] = i-1                                        # Create table of op codes
    }

    ######################## ASSEMBLER PASS 1 ######################## 
    FS = "[ \t]+"                                               # Multiple spaces/tabs as separators
    while(getline <srcfile > 0) {
        sub(/#.*/, "")                                          # Strip comment
        symtab[$1] = nextmem                                    # Remember label location
        if($2 != "") {                                          # Save op, addr if present
            print $2 "\t" $3 > tempfile
            nextmem++                                    
        }
    }

    close(tempfile)

    ########################  ASSEMBLER PASS 2  ######################## 
    nextmem = 0

    while(getline <tempfile > 0) {
        if($2 !~ /^[0-9]*$/) {
            $2 = symtab[$2]                                     # Replace symbolic address by numeric value
        }
        mem[nextmem++] = 1000 * op[$1] + $2                     # Pack into a word
    }

    ########################    INTERPRETER    ######################## 
    for(pc = 0; pc >= 0; ) {
        addr = mem[pc] % 1000
        code = int(mem[pc++] / 1000)                            # Advance PC to the next instruction
        if(code == op["get"])   { getline acc }
        else if(code == op["put"])  { print acc }
        else if(code == op["st"])    { mem[addr] = acc }
        else if(code == op["ld"])    { acc = mem[addr] }
        else if(code == op["add"])   { acc += mem[addr] }
        else if(code == op["sub"])   { acc -= mem[addr] }
        else if(code == op["jpos"])  { if(acc > 0)  pc = addr }
        else if(code == op["jz"])    { if(acc == 0)  pc = addr }
        else if(code == op["j"])     {  pc = addr }
        else if(code == op["halt"])  {  pc = -1  }
        else  {  pc = -1  }
    }
    
}
