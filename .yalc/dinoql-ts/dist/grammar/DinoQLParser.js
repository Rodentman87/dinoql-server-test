// Generated from ./grammar/DinoQL.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DinoQLListener from './DinoQLListener.js';
const serializedATN = [4,1,24,168,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,
8,0,11,0,12,0,27,1,1,1,1,1,1,1,1,3,1,34,8,1,1,2,1,2,1,2,1,2,1,2,1,3,3,3,
42,8,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,3,1,3,1,4,3,
4,58,8,4,1,4,1,4,1,4,1,4,4,4,64,8,4,11,4,12,4,65,1,4,1,4,1,5,3,5,71,8,5,
1,5,3,5,74,8,5,1,5,1,5,1,5,1,5,1,5,1,5,4,5,82,8,5,11,5,12,5,83,1,5,1,5,1,
6,3,6,89,8,6,1,6,3,6,92,8,6,1,6,1,6,3,6,96,8,6,1,6,1,6,1,6,1,6,1,7,3,7,103,
8,7,1,7,3,7,106,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,3,8,116,8,8,1,8,3,8,
119,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
4,9,137,8,9,11,9,12,9,138,1,9,1,9,1,9,3,9,144,8,9,1,10,3,10,147,8,10,1,10,
1,10,3,10,151,8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,3,11,160,8,11,1,11,
1,11,3,11,164,8,11,3,11,166,8,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,
22,0,0,183,0,25,1,0,0,0,2,33,1,0,0,0,4,35,1,0,0,0,6,41,1,0,0,0,8,57,1,0,
0,0,10,70,1,0,0,0,12,88,1,0,0,0,14,102,1,0,0,0,16,115,1,0,0,0,18,143,1,0,
0,0,20,146,1,0,0,0,22,165,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,
0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,29,34,3,4,2,0,30,34,3,8,4,0,
31,34,3,10,5,0,32,34,3,6,3,0,33,29,1,0,0,0,33,30,1,0,0,0,33,31,1,0,0,0,33,
32,1,0,0,0,34,3,1,0,0,0,35,36,5,1,0,0,36,37,5,16,0,0,37,38,5,16,0,0,38,39,
5,2,0,0,39,5,1,0,0,0,40,42,5,23,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,43,1,
0,0,0,43,44,5,3,0,0,44,45,5,16,0,0,45,46,5,4,0,0,46,51,5,16,0,0,47,48,5,
5,0,0,48,50,5,16,0,0,49,47,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,
0,0,52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,6,0,0,55,7,1,0,0,0,56,58,5,23,0,
0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,60,5,7,0,0,60,61,5,16,0,0,
61,63,5,4,0,0,62,64,3,12,6,0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,
66,1,0,0,0,66,67,1,0,0,0,67,68,5,6,0,0,68,9,1,0,0,0,69,71,5,23,0,0,70,69,
1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,74,5,15,0,0,73,72,1,0,0,0,73,74,1,
0,0,0,74,75,1,0,0,0,75,76,5,8,0,0,76,77,5,16,0,0,77,81,5,4,0,0,78,82,3,12,
6,0,79,82,3,14,7,0,80,82,3,16,8,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,
0,0,82,83,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,85,86,5,6,0,
0,86,11,1,0,0,0,87,89,5,23,0,0,88,87,1,0,0,0,88,89,1,0,0,0,89,91,1,0,0,0,
90,92,5,19,0,0,91,90,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,95,5,16,0,0,
94,96,5,18,0,0,95,94,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,5,9,0,0,98,
99,3,22,11,0,99,100,5,2,0,0,100,13,1,0,0,0,101,103,5,23,0,0,102,101,1,0,
0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,106,5,15,0,0,105,104,1,0,0,0,105,
106,1,0,0,0,106,107,1,0,0,0,107,108,5,10,0,0,108,109,5,16,0,0,109,110,3,
18,9,0,110,111,5,9,0,0,111,112,3,22,11,0,112,113,5,2,0,0,113,15,1,0,0,0,
114,116,5,23,0,0,115,114,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,119,
5,15,0,0,118,117,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,121,5,11,0,
0,121,122,5,16,0,0,122,123,3,18,9,0,123,124,5,9,0,0,124,125,3,22,11,0,125,
126,5,2,0,0,126,17,1,0,0,0,127,144,5,12,0,0,128,129,5,13,0,0,129,130,3,20,
10,0,130,131,5,14,0,0,131,144,1,0,0,0,132,136,5,13,0,0,133,134,3,20,10,0,
134,135,5,5,0,0,135,137,1,0,0,0,136,133,1,0,0,0,137,138,1,0,0,0,138,136,
1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,3,20,10,0,141,142,5,14,0,
0,142,144,1,0,0,0,143,127,1,0,0,0,143,128,1,0,0,0,143,132,1,0,0,0,144,19,
1,0,0,0,145,147,5,23,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,
148,150,5,16,0,0,149,151,5,18,0,0,150,149,1,0,0,0,150,151,1,0,0,0,151,152,
1,0,0,0,152,153,5,9,0,0,153,154,3,22,11,0,154,21,1,0,0,0,155,156,5,20,0,
0,156,157,5,16,0,0,157,159,5,21,0,0,158,160,5,18,0,0,159,158,1,0,0,0,159,
160,1,0,0,0,160,166,1,0,0,0,161,163,5,16,0,0,162,164,5,18,0,0,163,162,1,
0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,165,155,1,0,0,0,165,161,1,0,0,0,166,
23,1,0,0,0,24,27,33,41,51,57,65,70,73,81,83,88,91,95,102,105,115,118,138,
143,146,150,159,163,165];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DinoQLParser extends antlr4.Parser {

    static grammarFileName = "DinoQL.g4";
    static literalNames = [ null, "'scalar'", "';'", "'enum'", "'{'", "','", 
                            "'}'", "'interface'", "'resource'", "':'", "'query'", 
                            "'action'", "'()'", "'('", "')'", "'static'", 
                            null, null, "'?'", "'#'", "'['", "']'", "'/*'", 
                            null, "'*/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "STATIC", 
                             "ID", "WS", "OPTIONAL", "IDENTIFIER", "ARRAY_START", 
                             "ARRAY_END", "DOC_START", "DOC_COMMENT", "DOC_END" ];
    static ruleNames = [ "document", "definition", "scalarDefinition", "enumDefinition", 
                         "interfaceDefinition", "resourceDefinition", "propertyDefinition", 
                         "queryDefinition", "actionDefinition", "parameterListDefinition", 
                         "parameterDefinition", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DinoQLParser.ruleNames;
        this.literalNames = DinoQLParser.literalNames;
        this.symbolicNames = DinoQLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DinoQLParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.definition();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DinoQLParser.T__0) | (1 << DinoQLParser.T__2) | (1 << DinoQLParser.T__6) | (1 << DinoQLParser.T__7) | (1 << DinoQLParser.STATIC) | (1 << DinoQLParser.DOC_COMMENT))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DinoQLParser.RULE_definition);
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.scalarDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.interfaceDefinition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 31;
	            this.resourceDefinition();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 32;
	            this.enumDefinition();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scalarDefinition() {
	    let localctx = new ScalarDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DinoQLParser.RULE_scalarDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(DinoQLParser.T__0);
	        this.state = 36;
	        this.match(DinoQLParser.ID);
	        this.state = 37;
	        this.match(DinoQLParser.ID);
	        this.state = 38;
	        this.match(DinoQLParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumDefinition() {
	    let localctx = new EnumDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DinoQLParser.RULE_enumDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.DOC_COMMENT) {
	            this.state = 40;
	            this.match(DinoQLParser.DOC_COMMENT);
	        }

	        this.state = 43;
	        this.match(DinoQLParser.T__2);
	        this.state = 44;
	        this.match(DinoQLParser.ID);
	        this.state = 45;
	        this.match(DinoQLParser.T__3);
	        this.state = 46;
	        this.match(DinoQLParser.ID);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DinoQLParser.T__4) {
	            this.state = 47;
	            this.match(DinoQLParser.T__4);
	            this.state = 48;
	            this.match(DinoQLParser.ID);
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(DinoQLParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceDefinition() {
	    let localctx = new InterfaceDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DinoQLParser.RULE_interfaceDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.DOC_COMMENT) {
	            this.state = 56;
	            this.match(DinoQLParser.DOC_COMMENT);
	        }

	        this.state = 59;
	        this.match(DinoQLParser.T__6);
	        this.state = 60;
	        this.match(DinoQLParser.ID);
	        this.state = 61;
	        this.match(DinoQLParser.T__3);
	        this.state = 63; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this.propertyDefinition();
	            this.state = 65; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DinoQLParser.ID) | (1 << DinoQLParser.IDENTIFIER) | (1 << DinoQLParser.DOC_COMMENT))) !== 0));
	        this.state = 67;
	        this.match(DinoQLParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resourceDefinition() {
	    let localctx = new ResourceDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DinoQLParser.RULE_resourceDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.DOC_COMMENT) {
	            this.state = 69;
	            this.match(DinoQLParser.DOC_COMMENT);
	        }

	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.STATIC) {
	            this.state = 72;
	            this.match(DinoQLParser.STATIC);
	        }

	        this.state = 75;
	        this.match(DinoQLParser.T__7);
	        this.state = 76;
	        this.match(DinoQLParser.ID);
	        this.state = 77;
	        this.match(DinoQLParser.T__3);
	        this.state = 81; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 78;
	                this.propertyDefinition();
	                break;

	            case 2:
	                this.state = 79;
	                this.queryDefinition();
	                break;

	            case 3:
	                this.state = 80;
	                this.actionDefinition();
	                break;

	            }
	            this.state = 83; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DinoQLParser.T__9) | (1 << DinoQLParser.T__10) | (1 << DinoQLParser.STATIC) | (1 << DinoQLParser.ID) | (1 << DinoQLParser.IDENTIFIER) | (1 << DinoQLParser.DOC_COMMENT))) !== 0));
	        this.state = 85;
	        this.match(DinoQLParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	propertyDefinition() {
	    let localctx = new PropertyDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DinoQLParser.RULE_propertyDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.DOC_COMMENT) {
	            this.state = 87;
	            this.match(DinoQLParser.DOC_COMMENT);
	        }

	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.IDENTIFIER) {
	            this.state = 90;
	            this.match(DinoQLParser.IDENTIFIER);
	        }

	        this.state = 93;
	        this.match(DinoQLParser.ID);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.OPTIONAL) {
	            this.state = 94;
	            this.match(DinoQLParser.OPTIONAL);
	        }

	        this.state = 97;
	        this.match(DinoQLParser.T__8);
	        this.state = 98;
	        this.value();
	        this.state = 99;
	        this.match(DinoQLParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	queryDefinition() {
	    let localctx = new QueryDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DinoQLParser.RULE_queryDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.DOC_COMMENT) {
	            this.state = 101;
	            this.match(DinoQLParser.DOC_COMMENT);
	        }

	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.STATIC) {
	            this.state = 104;
	            this.match(DinoQLParser.STATIC);
	        }

	        this.state = 107;
	        this.match(DinoQLParser.T__9);
	        this.state = 108;
	        this.match(DinoQLParser.ID);
	        this.state = 109;
	        this.parameterListDefinition();
	        this.state = 110;
	        this.match(DinoQLParser.T__8);
	        this.state = 111;
	        this.value();
	        this.state = 112;
	        this.match(DinoQLParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actionDefinition() {
	    let localctx = new ActionDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DinoQLParser.RULE_actionDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.DOC_COMMENT) {
	            this.state = 114;
	            this.match(DinoQLParser.DOC_COMMENT);
	        }

	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.STATIC) {
	            this.state = 117;
	            this.match(DinoQLParser.STATIC);
	        }

	        this.state = 120;
	        this.match(DinoQLParser.T__10);
	        this.state = 121;
	        this.match(DinoQLParser.ID);
	        this.state = 122;
	        this.parameterListDefinition();
	        this.state = 123;
	        this.match(DinoQLParser.T__8);
	        this.state = 124;
	        this.value();
	        this.state = 125;
	        this.match(DinoQLParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterListDefinition() {
	    let localctx = new ParameterListDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DinoQLParser.RULE_parameterListDefinition);
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.match(DinoQLParser.T__11);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.match(DinoQLParser.T__12);
	            this.state = 129;
	            this.parameterDefinition();
	            this.state = 130;
	            this.match(DinoQLParser.T__13);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 132;
	            this.match(DinoQLParser.T__12);
	            this.state = 136; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 133;
	            		this.parameterDefinition();
	            		this.state = 134;
	            		this.match(DinoQLParser.T__4);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 138; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,17, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 140;
	            this.parameterDefinition();
	            this.state = 141;
	            this.match(DinoQLParser.T__13);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterDefinition() {
	    let localctx = new ParameterDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DinoQLParser.RULE_parameterDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.DOC_COMMENT) {
	            this.state = 145;
	            this.match(DinoQLParser.DOC_COMMENT);
	        }

	        this.state = 148;
	        this.match(DinoQLParser.ID);
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DinoQLParser.OPTIONAL) {
	            this.state = 149;
	            this.match(DinoQLParser.OPTIONAL);
	        }

	        this.state = 152;
	        this.match(DinoQLParser.T__8);
	        this.state = 153;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DinoQLParser.RULE_value);
	    var _la = 0; // Token type
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DinoQLParser.ARRAY_START:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.match(DinoQLParser.ARRAY_START);
	            this.state = 156;
	            this.match(DinoQLParser.ID);
	            this.state = 157;
	            this.match(DinoQLParser.ARRAY_END);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DinoQLParser.OPTIONAL) {
	                this.state = 158;
	                this.match(DinoQLParser.OPTIONAL);
	            }

	            break;
	        case DinoQLParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(DinoQLParser.ID);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DinoQLParser.OPTIONAL) {
	                this.state = 162;
	                this.match(DinoQLParser.OPTIONAL);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DinoQLParser.EOF = antlr4.Token.EOF;
DinoQLParser.T__0 = 1;
DinoQLParser.T__1 = 2;
DinoQLParser.T__2 = 3;
DinoQLParser.T__3 = 4;
DinoQLParser.T__4 = 5;
DinoQLParser.T__5 = 6;
DinoQLParser.T__6 = 7;
DinoQLParser.T__7 = 8;
DinoQLParser.T__8 = 9;
DinoQLParser.T__9 = 10;
DinoQLParser.T__10 = 11;
DinoQLParser.T__11 = 12;
DinoQLParser.T__12 = 13;
DinoQLParser.T__13 = 14;
DinoQLParser.STATIC = 15;
DinoQLParser.ID = 16;
DinoQLParser.WS = 17;
DinoQLParser.OPTIONAL = 18;
DinoQLParser.IDENTIFIER = 19;
DinoQLParser.ARRAY_START = 20;
DinoQLParser.ARRAY_END = 21;
DinoQLParser.DOC_START = 22;
DinoQLParser.DOC_COMMENT = 23;
DinoQLParser.DOC_END = 24;

DinoQLParser.RULE_document = 0;
DinoQLParser.RULE_definition = 1;
DinoQLParser.RULE_scalarDefinition = 2;
DinoQLParser.RULE_enumDefinition = 3;
DinoQLParser.RULE_interfaceDefinition = 4;
DinoQLParser.RULE_resourceDefinition = 5;
DinoQLParser.RULE_propertyDefinition = 6;
DinoQLParser.RULE_queryDefinition = 7;
DinoQLParser.RULE_actionDefinition = 8;
DinoQLParser.RULE_parameterListDefinition = 9;
DinoQLParser.RULE_parameterDefinition = 10;
DinoQLParser.RULE_value = 11;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_document;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitDocument(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_definition;
    }

	scalarDefinition() {
	    return this.getTypedRuleContext(ScalarDefinitionContext,0);
	};

	interfaceDefinition() {
	    return this.getTypedRuleContext(InterfaceDefinitionContext,0);
	};

	resourceDefinition() {
	    return this.getTypedRuleContext(ResourceDefinitionContext,0);
	};

	enumDefinition() {
	    return this.getTypedRuleContext(EnumDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class ScalarDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_scalarDefinition;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DinoQLParser.ID);
	    } else {
	        return this.getToken(DinoQLParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterScalarDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitScalarDefinition(this);
		}
	}


}



class EnumDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_enumDefinition;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DinoQLParser.ID);
	    } else {
	        return this.getToken(DinoQLParser.ID, i);
	    }
	};


	DOC_COMMENT() {
	    return this.getToken(DinoQLParser.DOC_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterEnumDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitEnumDefinition(this);
		}
	}


}



class InterfaceDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_interfaceDefinition;
    }

	ID() {
	    return this.getToken(DinoQLParser.ID, 0);
	};

	DOC_COMMENT() {
	    return this.getToken(DinoQLParser.DOC_COMMENT, 0);
	};

	propertyDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(PropertyDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterInterfaceDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitInterfaceDefinition(this);
		}
	}


}



class ResourceDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_resourceDefinition;
    }

	ID() {
	    return this.getToken(DinoQLParser.ID, 0);
	};

	DOC_COMMENT() {
	    return this.getToken(DinoQLParser.DOC_COMMENT, 0);
	};

	STATIC() {
	    return this.getToken(DinoQLParser.STATIC, 0);
	};

	propertyDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(PropertyDefinitionContext,i);
	    }
	};

	queryDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QueryDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(QueryDefinitionContext,i);
	    }
	};

	actionDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(ActionDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterResourceDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitResourceDefinition(this);
		}
	}


}



class PropertyDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_propertyDefinition;
    }

	ID() {
	    return this.getToken(DinoQLParser.ID, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DOC_COMMENT() {
	    return this.getToken(DinoQLParser.DOC_COMMENT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(DinoQLParser.IDENTIFIER, 0);
	};

	OPTIONAL() {
	    return this.getToken(DinoQLParser.OPTIONAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterPropertyDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitPropertyDefinition(this);
		}
	}


}



class QueryDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_queryDefinition;
    }

	ID() {
	    return this.getToken(DinoQLParser.ID, 0);
	};

	parameterListDefinition() {
	    return this.getTypedRuleContext(ParameterListDefinitionContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DOC_COMMENT() {
	    return this.getToken(DinoQLParser.DOC_COMMENT, 0);
	};

	STATIC() {
	    return this.getToken(DinoQLParser.STATIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterQueryDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitQueryDefinition(this);
		}
	}


}



class ActionDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_actionDefinition;
    }

	ID() {
	    return this.getToken(DinoQLParser.ID, 0);
	};

	parameterListDefinition() {
	    return this.getTypedRuleContext(ParameterListDefinitionContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DOC_COMMENT() {
	    return this.getToken(DinoQLParser.DOC_COMMENT, 0);
	};

	STATIC() {
	    return this.getToken(DinoQLParser.STATIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterActionDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitActionDefinition(this);
		}
	}


}



class ParameterListDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_parameterListDefinition;
    }

	parameterDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(ParameterDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterParameterListDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitParameterListDefinition(this);
		}
	}


}



class ParameterDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_parameterDefinition;
    }

	ID() {
	    return this.getToken(DinoQLParser.ID, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DOC_COMMENT() {
	    return this.getToken(DinoQLParser.DOC_COMMENT, 0);
	};

	OPTIONAL() {
	    return this.getToken(DinoQLParser.OPTIONAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterParameterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitParameterDefinition(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DinoQLParser.RULE_value;
    }

	ARRAY_START() {
	    return this.getToken(DinoQLParser.ARRAY_START, 0);
	};

	ID() {
	    return this.getToken(DinoQLParser.ID, 0);
	};

	ARRAY_END() {
	    return this.getToken(DinoQLParser.ARRAY_END, 0);
	};

	OPTIONAL() {
	    return this.getToken(DinoQLParser.OPTIONAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DinoQLListener ) {
	        listener.exitValue(this);
		}
	}


}




DinoQLParser.DocumentContext = DocumentContext; 
DinoQLParser.DefinitionContext = DefinitionContext; 
DinoQLParser.ScalarDefinitionContext = ScalarDefinitionContext; 
DinoQLParser.EnumDefinitionContext = EnumDefinitionContext; 
DinoQLParser.InterfaceDefinitionContext = InterfaceDefinitionContext; 
DinoQLParser.ResourceDefinitionContext = ResourceDefinitionContext; 
DinoQLParser.PropertyDefinitionContext = PropertyDefinitionContext; 
DinoQLParser.QueryDefinitionContext = QueryDefinitionContext; 
DinoQLParser.ActionDefinitionContext = ActionDefinitionContext; 
DinoQLParser.ParameterListDefinitionContext = ParameterListDefinitionContext; 
DinoQLParser.ParameterDefinitionContext = ParameterDefinitionContext; 
DinoQLParser.ValueContext = ValueContext; 
