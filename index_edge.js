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
                            "eid226",
                            "left",
                            0,
                            0,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
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
                            "eid233",
                            "opacity",
                            1175,
                            825,
                            "easeOutCubic",
                            "${title2}",
                            '0',
                            '1'
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
                            type: 'image',
                            filter: [0, 0, 1, 0.91877140410959, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'A-State-of-Change',
                            rect: ['-8px', '0px', '1047px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/A-State-of-Change.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['21px', '0px', '550px', '400px', 'auto', 'auto'],
                            transform: [[], [], ['31'], [1, 1, 1]],
                            id: 'Rectangle2',
                            opacity: '0.8799225101626',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(34,187,237,1.00)']
                        },
                        {
                            opacity: '1',
                            rect: ['32px', '-36px', '516px', '521px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 209.09139951941, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'EllipseCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(41,47,85,1.00)']
                        },
                        {
                            opacity: '0.56494537601626',
                            rect: ['103px', '-9px', '464px', '468px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 210.05458047945, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(14,79,100,1.00)']
                        },
                        {
                            rect: ['41px', '176px', '556px', '87px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: gothambold; font-size: 69px;\">We\'ve Been Busy</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
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
            "SlideSymbol3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'WatermanLR',
                            type: 'image',
                            rect: ['1012px', '0', '778px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WatermanLR.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['-41'], [1, 1, 1]],
                            rect: ['-898px', '0px', '710px', '400px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(239,119,35,1.00)']
                        },
                        {
                            transform: [[], ['-48'], [0, 0, 0], [1, 1, 1]],
                            id: 'represent-b',
                            type: 'image',
                            rect: ['-213px', '567px', '477px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/represent-b.png', '0px', '0px']
                        },
                        {
                            id: 'represent',
                            type: 'image',
                            rect: ['615px', '-403px', '365px', '411px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/represent.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '1px', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(239,119,35,0.00)']
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
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid429",
                            "left",
                            0,
                            1000,
                            "easeOutCubic",
                            "${WatermanLR}",
                            '1012px',
                            '222px'
                        ],
                        [
                            "eid431",
                            "top",
                            500,
                            1000,
                            "easeOutCubic",
                            "${represent}",
                            '-403px',
                            '-3px'
                        ],
                        [
                            "eid435",
                            "top",
                            1000,
                            1000,
                            "easeOutCubic",
                            "${represent-b}",
                            '567px',
                            '142px'
                        ],
                        [
                            "eid433",
                            "left",
                            500,
                            1000,
                            "easeOutCubic",
                            "${represent}",
                            '615px',
                            '265px'
                        ],
                        [
                            "eid437",
                            "left",
                            1000,
                            1000,
                            "easeOutCubic",
                            "${represent-b}",
                            '-213px',
                            '160px'
                        ],
                        [
                            "eid427",
                            "left",
                            0,
                            1000,
                            "easeOutCubic",
                            "${Rectangle6}",
                            '-898px',
                            '-198px'
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
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'torn-paper',
                            rect: ['0px', '0', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/torn-paper.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lion',
                            opacity: '0',
                            rect: ['-28px', '-34px', '674px', '489px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lion.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'torn',
                            rect: ['541px', '0px', '459px', '400px', 'auto', 'auto'],
                            clip: 'rect(0px 459px 2px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/torn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'text',
                            opacity: '0',
                            rect: ['609px', '67px', '339px', '266px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/text.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1px', '1px', '1000px', '400px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)', [89, [['rgba(255,255,255,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'imagingamericanwest2',
                            opacity: '0',
                            rect: ['4px', '0px', '606px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/imagingamericanwest.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'imaging_sub',
                            opacity: '0',
                            rect: ['586px', '247px', '300px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/imaging_sub.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'imaging_title',
                            opacity: '0',
                            rect: ['653px', '36px', '200px', '201px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/imaging_title.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '1px', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(34,187,237,0.00)']
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
                            "eid401",
                            "left",
                            500,
                            7500,
                            "easeOutCubic",
                            "${imagingamericanwest2}",
                            '4px',
                            '34px'
                        ],
                        [
                            "eid391",
                            "background-image",
                            0,
                            1000,
                            "easeOutCubic",
                            "${Rectangle}",
                            [89,[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',100]]],
                            [89,[['rgba(151,183,194,1.00)',0],['rgba(78,152,163,1.00)',100]]]
                        ],
                        [
                            "eid393",
                            "opacity",
                            500,
                            1546,
                            "easeOutCubic",
                            "${imagingamericanwest2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid395",
                            "opacity",
                            1279,
                            767,
                            "easeOutCubic",
                            "${imaging_title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid397",
                            "opacity",
                            1619,
                            767,
                            "easeOutCubic",
                            "${imaging_sub}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-351832807");
