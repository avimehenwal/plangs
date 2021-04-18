(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{587:function(t,e,a){"use strict";a.r(e);var s=a(7),n=function(t){t.options.__data__block__={mermaid_64a567b4:'graph LR\nA(e-store):::yellow\nB(Payment Processor):::green\nC(Stripe API):::purple\nD(Paypal API):::blue\n\nA --\x3e B --\x3e C & D\n\nclassDef green fill:#1f9,stroke-width:0px;\nclassDef orange fill:#f96,stroke-width:0px;\nclassDef yellow fill:#FFE873,stroke-width:0px;\nclassDef blue fill:#b8d4ff,stroke-width:0px;\nclassDef purple fill:#f9f,stroke:#333,stroke-width:0px;\n\nclick A "https://www.wikipedia.org/" "Click to open wikipedia"\n'}},r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oop-principles-in-js-programming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oop-principles-in-js-programming"}},[t._v("#")]),t._v(" OOP Principles in js programming")]),t._v(" "),a("p",[t._v("The Art of Writing "),a("a",{attrs:{href:"https://github.com/ryanmcdermott/3rs-of-software-architecture",target:"_blank",rel:"noopener noreferrer"}},[t._v("reusable, refactorable and redable code"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("3R's")])]),t._v(" "),a("p",[t._v("We spend much more time reading code than writing code!, when code is NOT written for extension.")]),t._v(" "),a("p",[t._v("There are 100 million programmers in the world.")]),t._v(" "),a("ul",[a("li",[t._v("Bulk of programming is managing dependencies")]),t._v(" "),a("li",[t._v("Compilers knows about the source code.")]),t._v(" "),a("li",[t._v("Why is OO (object oriented) design part of every language today?\n"),a("ul",[a("li",[t._v("what so good about OO that all languages are OO these days?")]),t._v(" "),a("li",[t._v("what about COBOL, FORTRAN style programming")]),t._v(" "),a("li",[t._v("OO languages do not need pointers to functions, because they are polymorphic")])])]),t._v(" "),a("li",[t._v("No polymorphism in C")]),t._v(" "),a("li",[t._v("Carefully decide which direction the arrows between modules point?\n"),a("ul",[a("li",[t._v("thats what OO is")]),t._v(" "),a("li",[t._v("Managing dependencies by selectively re-inverting keys in your s/w")])])])]),t._v(" "),a("h2",{attrs:{id:"solid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solid"}},[t._v("#")]),t._v(" SOLID")]),t._v(" "),a("p",[t._v("Introduced by "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Robert_C._Martin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Robert Martin aka uncle bob"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"single-responsibility-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-responsibility-principle"}},[t._v("#")]),t._v(" Single Responsibility Principle")]),t._v(" "),a("p",[t._v("Bad way, "),a("code",[t._v("change_settings")]),t._v(" and "),a("code",[t._v("verify_credentials")]),t._v(" in the same class.")]),t._v(" "),a("p",[t._v("Good way, seperate classes "),a("code",[t._v("UserAuth")]),t._v(" and "),a("code",[t._v("UserSettings")]),t._v(" based in single responsibility")]),t._v(" "),a("ul",[a("li",[t._v("What would the reason for change of this piece of code? IF there are multiple reasons, break them down.")]),t._v(" "),a("li",[t._v("In js, use modules instead of classes")]),t._v(" "),a("li",[t._v("modules for logger, logger can change, toFile, toEmail, toConsole, toDatabase or all")]),t._v(" "),a("li",[a("code",[t._v("calorieTracker")]),t._v(" class, how calories are tracked, calls logger class for log")])]),t._v(" "),a("h3",{attrs:{id:"open-for-extension-closed-for-modification-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-for-extension-closed-for-modification-principle"}},[t._v("#")]),t._v(" Open for extension, closed for modification principle")]),t._v(" "),a("ul",[a("li",[t._v("If you have to open a file and manually modify it, then you have failed in open-closed principle")]),t._v(" "),a("li",[t._v("Think about extension, if your controllers (methods which operates on data change) depend on data, write helper methods to deal with data, instead of hardcoding them.")]),t._v(" "),a("li",[t._v("Online quizes, options based on question types\n"),a("ul",[a("li",[t._v("using "),a("code",[t._v("switch")]),t._v(" maybe a violation of open-closed principle")]),t._v(" "),a("li",[t._v("usually used in conjunction with single responsibility principle")]),t._v(" "),a("li",[t._v("break each question types into its own HandlerClass, open for extension")]),t._v(" "),a("li",[t._v("Abstracted class "),a("code",[t._v("printQuiz")]),t._v(" is never touched - close for change")])])]),t._v(" "),a("li",[t._v("instead of changing code, write new code to make work with existing code to implement a new feature")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" questions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BooleanQuestion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This video is useful'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MultipleChoiceQuestion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'what is your fav language?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wasm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextQuestion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Describe your favourite js feature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RangeQuestion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'What is speed limit on your city?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printQuizQuestions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("questions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"liskov-substitution-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liskov-substitution-principle"}},[t._v("#")]),t._v(" Liskov Substitution Principle")]),t._v(" "),a("blockquote",[a("p",[t._v("important principle to write OOP code")])]),t._v(" "),a("p",[t._v("Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.")]),t._v(" "),a("p",[t._v("All squares are rectangles, but not all rectangles are squares. So if in your code you replace a instance of rectangle with square, it should still work.")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[a("svg",{staticStyle:{"vertical-align":"-0.464ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20.97ex",height:"2.059ex",viewBox:"0 -705 9268.6 910"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{attrs:{"data-c":"53",d:"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(613, 0)"}},[a("path",{attrs:{"data-c":"71",d:"M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(1059, 0)"}},[a("path",{attrs:{"data-c":"75",d:"M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(1631, 0)"}},[a("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(2160, 0)"}},[a("path",{attrs:{"data-c":"72",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(2611, 0)"}},[a("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(3354.8, 0)"}},[a("path",{attrs:{"data-c":"2282",d:"M84 250Q84 372 166 450T360 539Q361 539 370 539T395 539T430 540T475 540T524 540H679Q694 532 694 520Q694 511 681 501L522 500H470H441Q366 500 338 496T266 472Q244 461 224 446T179 404T139 337T124 250V245Q124 157 185 89Q244 25 328 7Q348 2 366 2T522 0H681Q694 -10 694 -20Q694 -32 679 -40H526Q510 -40 480 -40T434 -41Q350 -41 289 -25T172 45Q84 127 84 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(4410.6, 0)"}},[a("path",{attrs:{"data-c":"52",d:"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(5169.6, 0)"}},[a("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(5635.6, 0)"}},[a("path",{attrs:{"data-c":"63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(6068.6, 0)"}},[a("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(6429.6, 0)"}},[a("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(6958.6, 0)"}},[a("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(7558.6, 0)"}},[a("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(8035.6, 0)"}},[a("path",{attrs:{"data-c":"6C",d:"M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(8333.6, 0)"}},[a("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(8799.6, 0)"}},[a("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})])])])])])],1),a("p"),t._v(" "),a("ul",[a("li",[t._v("Use COMPOSITION, adding functionality instead of inheriting functionality\n"),a("ul",[a("li",[t._v("composition vs inheritance")])])])]),t._v(" "),a("h3",{attrs:{id:"interface-seggregation-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface-seggregation-principle"}},[t._v("#")]),t._v(" Interface Seggregation Principle")]),t._v(" "),a("p",[t._v("Many interfaces are better than one general purpose interface.")]),t._v(" "),a("ul",[a("li",[t._v("Seggregating your interfaces and making them smaller")]),t._v(" "),a("li",[t._v("Classes which require large settings objects")]),t._v(" "),a("li",[t._v("set them to sane defaults and optional settings to change the behavious when needed.")]),t._v(" "),a("li",[t._v("When a interfaces is implemented in a class, all its methods and attributes need to be defined\n"),a("ul",[a("li",[t._v("sometimes it may not be desirable to define/use them all in a class definition")]),t._v(" "),a("li",[t._v("break big classes into inheritance")]),t._v(" "),a("li",[t._v("or use composition")])])])]),t._v(" "),a("h3",{attrs:{id:"dependency-inversion-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependency-inversion-principle"}},[t._v("#")]),t._v(" Dependency Inversion Principle")]),t._v(" "),a("blockquote",[a("p",[t._v("Make your code more testable, able to switch between dependencies quickly")])]),t._v(" "),a("ul",[a("li",[t._v("High level module and low level module should depend on abstractions")]),t._v(" "),a("li",[t._v("Abstraction should not depend upon details, details should depend upon abstraction")]),t._v(" "),a("li",[t._v("Example, store and payment gateway")]),t._v(" "),a("li",[t._v("Abstraction makes behaviours more testable and we do not have to change tons of code.")]),t._v(" "),a("li",[t._v("Akin to Adapter pattern, Facade Pattern\n"),a("ul",[a("li",[t._v("wrapper around external dependencies")])])])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_64a567b4",graph:t.$dataBlock.mermaid_64a567b4}}),a("h2",{attrs:{id:"composition-inheritance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-inheritance"}},[t._v("#")]),t._v(" Composition | Inheritance")]),t._v(" "),a("ul",[a("li",[t._v("class extensions saves us from re-implementing same behaviour in our children classes")]),t._v(" "),a("li",[t._v("with composition we define what an object can do")]),t._v(" "),a("li",[t._v("return behaviours as functions")]),t._v(" "),a("li",[t._v("Then use multiple behaviours into a new composition Function\n"),a("ul",[a("li",[t._v("new composed function object will have all the behaviours which are needed.")])])])]),t._v(" "),a("h2",{attrs:{id:"noob-vs-professional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noob-vs-professional"}},[t._v("#")]),t._v(" Noob vs Professional")]),t._v(" "),a("blockquote",[a("p",[t._v("writing code thats easy to read is the important part")])]),t._v(" "),a("ul",[a("li",[t._v("remove redundant code")]),t._v(" "),a("li",[t._v("take care of return types")]),t._v(" "),a("li",[t._v("Boundary values analysis, invalid, null, NaN value handling to a logic function")]),t._v(" "),a("li",[t._v("Redability over #lines")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.webdevsimplified.com/2020-01/guard-clauses/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Guard Clause"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("A "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Guard_(computer_science)",target:"_blank",rel:"noopener noreferrer"}},[t._v("guard"),a("OutboundLink")],1),t._v(" clause is simply a single piece of conditional logic at the beginning of a function which will return from the function early if a certain condition is met.")]),t._v(" "),a("li",[t._v("flatten your code, remove unnecessary nesting")]),t._v(" "),a("li",[t._v("or handle nesting smartly")])])]),t._v(" "),a("li",[t._v("variable, function, module naming convention matters")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numberToAccountingString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" reutrn "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Bugs with "),a("code",[t._v("||")]),t._v(" or default value operator")]),t._v(" "),a("li",[t._v("Break out configs, and defaults to "),a("code",[t._v("const")]),t._v(" values")]),t._v(" "),a("li",[t._v("Use object destructuring features in setting default function parameters values")]),t._v(" "),a("li",[t._v("Use "),a("code",[t._v("const")]),t._v(" properly\n"),a("ul",[a("li",[t._v("when the value wont change once set throughout your code.")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ship "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Dealing with asynchronous code (unreliable, time-consuming service)")]),t._v(" "),a("li",[t._v("Flatten and remove nesting using "),a("code",[t._v("async/await")]),t._v(" and "),a("code",[t._v("promises")]),t._v(" "),a("ul",[a("li",[t._v("break down callback hell into Promises and async/await")])])]),t._v(" "),a("li",[t._v("remove unnecessary side effects")]),t._v(" "),a("li",[t._v("Avoid extra dependencies and implementation details leaking out of the function\n"),a("ul",[a("li",[t._v("closing the file/buffer after read/write operation is performed")]),t._v(" "),a("li",[t._v("place implementation in a seperate module, SOLID")])])]),t._v(" "),a("li",[t._v("DRY, branch out reusable code into seperate modules\n"),a("ul",[a("li",[t._v("validations, helper functions, utilities etc.")])])])]),t._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ryanmcdermott/clean-code-javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ryanmcdermott/clean-code-javascript"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9"),a("OutboundLink")],1)])]),t._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/zHiWqnTWsn4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/-ptMtJAdj40",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),a("Footer")],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);e.default=r.exports}}]);