/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'gothambold': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mainHolder',
                            type: 'group',
                            rect: ['0px', '0px', '1000px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'sliderHolder',
                                type: 'rect',
                                rect: ['0', '0px', '1000px', '400px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000px', '400px', 'auto', 'auto'],
                            sizeRange: ['null','','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "MainContainerSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0', '0', '800px', '200px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800', '200']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "PageButtonSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            userClass: '',
                            rect: ['0', '0', '20', '20', 'auto', 'auto'],
                            borderRadius: ['90.3% 90.3%', '90.3%', '90.3% 90.3%', '90.3% 90.3%'],
                            type: 'ellipse',
                            id: 'btn',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            fill: ['rgba(127,119,119,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20', '20']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid213",
                            "border-top-right-radius",
                            0,
                            0,
                            "linear",
                            "${btn}",
                            [90.3,90.3],
                            [90.3,90.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid214",
                            "border-bottom-right-radius",
                            0,
                            0,
                            "linear",
                            "${btn}",
                            [90.3,90.3],
                            [90.3,90.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid212",
                            "border-top-left-radius",
                            0,
                            0,
                            "linear",
                            "${btn}",
                            [90.3,90.3],
                            [90.3,90.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid211",
                            "border-bottom-left-radius",
                            0,
                            0,
                            "linear",
                            "${btn}",
                            [90.3,90.3],
                            [90.3,90.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "PageButtonContainerSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20', '20']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "SlideSymbol1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1000px', '400px', 'auto', 'auto'],
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            overflow: 'auto',
                            id: 'Rectangle2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(127,159,184,1.00)']
                        },
                        {
                            rect: ['14px', '0', '621px', '400px', 'auto', 'auto'],
                            id: 'stpauls',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stpauls.jpg', '0px', '0px']
                        },
                        {
                            rect: ['475px', '95px', '500px', '129px', 'auto', 'auto'],
                            id: 'title2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/title2.png', '0px', '0px']
                        },
                        {
                            rect: ['663px', '317px', '300px', '60px', 'auto', 'auto'],
                            id: 'nysmcredit',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nysmcredit.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '1px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(41,47,85,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1000px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid425",
                            "top",
                            2208,
                            0,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid233",
                            "opacity",
                            1175,
                            825,
                            "easeOutCubic",
                            "${title2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "opacity",
                            500,
                            675,
                            "easeOutCubic",
                            "${stpauls}",
                            '0',
                            '1'
                        ],
                        [
                            "eid229",
                            "left",
                            500,
                            7500,
                            "easeOutCubic",
                            "${stpauls}",
                            '-10px',
                            '14px'
                        ],
                        [
                            "eid223",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "width",
                            0,
                            0,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '1000px',
                            '1000px'
                        ],
                        [
                            "eid239",
                            "opacity",
                            2500,
                            500,
                            "easeOutCubic",
                            "${nysmcredit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "left",
                            0,
                            0,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "SlideSymbol34": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-8px', '0px', '1047px', '400px', 'auto', 'auto'],
                            filter: [0, 0, 1, 0.91877140410959, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'A-State-of-Change',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/A-State-of-Change.jpg', '0px', '0px']
                        },
                        {
                            rect: ['21px', '0px', '550px', '400px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0.8799225101626',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], ['31'], [1, 1, 1]],
                            fill: ['rgba(34,187,237,1.00)']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['32px', '-36px', '516px', '521px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 209.09139951941, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'EllipseCopy',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(41,47,85,1.00)']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['103px', '-9px', '464px', '468px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 210.05458047945, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Ellipse',
                            opacity: '0.56494537601626',
                            type: 'ellipse',
                            fill: ['rgba(14,79,100,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['41px', '176px', '556px', '87px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: gothambold; font-size: 69px;\">We\'ve Been Busy</span></p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1000px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 676,
                    autoPlay: false,
                    data: [
                        [
                            "eid419",
                            "left",
                            676,
                            0,
                            "easeOutCubic",
                            "${A-State-of-Change}",
                            '-8px',
                            '-8px'
                        ]
                    ]
                }
            },
            "SlideSymbol2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0', '1000px', '400px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'torn-paper',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/torn-paper.jpg', '0px', '0px']
                        },
                        {
                            rect: ['-28px', '-34px', '674px', '489px', 'auto', 'auto'],
                            id: 'lion',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lion.jpg', '0px', '0px']
                        },
                        {
                            rect: ['541px', '0px', '459px', '400px', 'auto', 'auto'],
                            id: 'torn',
                            type: 'image',
                            clip: 'rect(0px 459px 2px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/torn.png', '0px', '0px']
                        },
                        {
                            rect: ['609px', '67px', '339px', '266px', 'auto', 'auto'],
                            id: 'text',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/text.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '1px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1000px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: false,
                    data: [
                        [
                            "eid459",
                            "width",
                            1000,
                            3500,
                            "easeOutCubic",
                            "${lion}",
                            '674px',
                            '732px'
                        ],
                        [
                            "eid457",
                            "height",
                            1000,
                            3500,
                            "easeOutCubic",
                            "${lion}",
                            '489px',
                            '530px'
                        ],
                        [
                            "eid440",
                            "clip",
                            1000,
                            500,
                            "easeOutCubic",
                            "${torn}",
                            [0,459,2,0],
                            [0,459,400,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid461",
                            "left",
                            1000,
                            3500,
                            "easeOutCubic",
                            "${lion}",
                            '-28px',
                            '-44px'
                        ],
                        [
                            "eid451",
                            "opacity",
                            1000,
                            1000,
                            "easeOutCubic",
                            "${lion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid453",
                            "opacity",
                            0,
                            1133,
                            "easeOutCubic",
                            "${text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid463",
                            "top",
                            1000,
                            3500,
                            "easeOutCubic",
                            "${lion}",
                            '-34px',
                            '-52px'
                        ]
                    ]
                }
            },
            "SlideSymbol0": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'hudson-graysq',
                            type: 'image',
                            rect: ['590px', '0', '410px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hudson-graysq.png', '0px', '0px']
                        },
                        {
                            rect: ['592px', '23px', '410px', '400px', 'auto', 'auto'],
                            id: 'hudson-TITLESQ',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hudson-TITLESQ.jpg', '0px', '0px']
                        },
                        {
                            rect: ['50px', '0', '540px', '400px', 'auto', 'auto'],
                            id: 'hudson-02',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hudson-02.jpg', '0px', '0px']
                        },
                        {
                            rect: ['50px', '0', '540px', '400px', 'auto', 'auto'],
                            id: 'hudson-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hudson-03.jpg', '0px', '0px']
                        },
                        {
                            rect: ['50px', '0', '540px', '400px', 'auto', 'auto'],
                            id: 'hudson-01',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hudson-01.jpg', '0px', '0px']
                        },
                        {
                            id: 'hudson-left',
                            type: 'image',
                            rect: ['0', '0', '50px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hudson-left.jpg', '0px', '0px']
                        },
                        {
                            rect: ['894px', '212px', '61px', '74px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(68,66,69,1.00)']
                        },
                        {
                            rect: ['900px', '234px', '52px', '65px', 'auto', 'auto'],
                            transform: [[], ['32']],
                            id: 'hudson-S',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/hudson-S.png', '0px', '0px']
                        },
                        {
                            rect: ['50px', '0', '540px', '400px', 'auto', 'auto'],
                            id: 'building',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/building.jpg', '0px', '0px']
                        },
                        {
                            rect: ['-403', '125', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif', [150, '%'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['627px', '314px', '335px', '47px', 'auto', 'auto'],
                            id: 'hudson-photogaller2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hudson-photogaller2.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '1px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1000px', '400px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: false,
                    data: [
                        [
                            "eid558",
                            "rotateZ",
                            1500,
                            4333,
                            "linear",
                            "${hudson-S}",
                            '0deg',
                            '32deg'
                        ],
                        [
                            "eid470",
                            "left",
                            0,
                            0,
                            "easeOutCubic",
                            "${hudson-03}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid606",
                            "top",
                            10000,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '212px',
                            '212px'
                        ],
                        [
                            "eid604",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid605",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid647",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${hudson-TITLESQ}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid629",
                            "opacity",
                            1500,
                            1500,
                            "linear",
                            "${hudson-photogaller2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid600",
                            "top",
                            1500,
                            4333,
                            "linear",
                            "${hudson-S}",
                            '216px',
                            '234px'
                        ],
                        [
                            "eid601",
                            "left",
                            1500,
                            6500,
                            "linear",
                            "${hudson-S}",
                            '900px',
                            '899px'
                        ],
                        [
                            "eid467",
                            "opacity",
                            1500,
                            3000,
                            "easeOutCubic",
                            "${hudson-01}",
                            '1',
                            '0'
                        ],
                        [
                            "eid602",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hudson-S}",
                            'none',
                            'none'
                        ],
                        [
                            "eid603",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${hudson-S}",
                            'none',
                            'block'
                        ],
                        [
                            "eid471",
                            "left",
                            10000,
                            0,
                            "easeOutCubic",
                            "${hudson-02}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid468",
                            "opacity",
                            4500,
                            3235,
                            "easeOutCubic",
                            "${hudson-03}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-351832807");
