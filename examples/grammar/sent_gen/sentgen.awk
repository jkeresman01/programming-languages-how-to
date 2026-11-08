###########################################################################
# sentgen - Random sentence generator
#   input: grammar file; sequence of nonterminals
#   output: a random sentence of for each nonterminal
#
# Random nonsene:
#
# Context free grammar is a set of rules that define how to generate or
# analyze a set of sentences.
#
# Each rule called a production has the form:  A -> B C D ..
# 
# The meaning of this production is that any A can be "rewritten" as B C D...
# The symbol on left-hand side (lhs), A,  is called nonterminal ... it can be 
# exanded further. The symbols on right-hand size can be nonterminals, more As,
# or terminals (can't be expanded).
#
###########################################################################

BEGIN {                                                 # Read rules from grammar file
    while(getline < "grammar" > 0) {
        if($2 == "->") {
            i = ++lhs[$1]                               # Count LHS
            rhscnt[$1, i] = NF-2                        # How many in RHS
            for(j = 3; j <= NF; j++)
                rhlist[$1, i, j -2] = $j
        } else {
            print "Illegal production: " $0
        }
    }
}

{
    if($1 in lhs) {                                     # Non terminal to expand
        gen($1)
        printf("\n")
    } else {
        print "Unknown nonterminal: " $0
    }
}

function gen(sym, i, j) {                               # Print random phrase derived from SYM
    if(sym in lhs) {                                    # A nonterminal
        i = int(lhs[sym] * rand()) + 1
        for(j = 1; j <= rhscnt[sym, i]; j++) {          # Expand RHS
            gen(rhslist[sym, i, j]
        }
    } else {
        printf("%s ", sym)
    }
}


