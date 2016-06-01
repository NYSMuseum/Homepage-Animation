/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            "http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js",
            "http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/utils/Draggable.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mainHolder',
                            type: 'group',
                            rect: ['0px', '0px', '100%', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'sliderHolder',
                                type: 'rect',
                                rect: ['0px', '0px', '100%', '400px', 'auto', 'auto'],
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
                            rect: [0, 0, '800px', '200px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 800, 200]
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
                            rect: ['0px', '1px', '1000px', '400px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(127,159,184,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'stpauls',
                            opacity: '0',
                            rect: ['14px', '0', '621px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/stpauls.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'title2',
                            opacity: '0',
                            rect: ['475px', '95px', '500px', '129px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/title2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'nysmcredit',
                            opacity: '0',
                            rect: ['663px', '317px', '300px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nysmcredit.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [2, 'rgb(197, 197, 197)', 'none'],
                            rect: ['1px', '1px', '996px', '396px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
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
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid225",
                            "opacity",
                            500,
                            1000,
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
                            "eid229",
                            "left",
                            500,
                            2500,
                            "easeOutCubic",
                            "${stpauls}",
                            '-10px',
                            '14px'
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
                            "eid223",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0',
                            '1'
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
                            id: 'p50_slideshow',
                            symbolName: 'p50_slideshow',
                            type: 'rect',
                            rect: ['1', '0', '1000', '400', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'main5',
                            opacity: '0',
                            rect: ['291px', '-6px', '460px', '411px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/main5.png', '0px', '0px']
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
                    duration: 10250,
                    autoPlay: false,
                    data: [
                        [
                            "eid260",
                            "left",
                            805,
                            945,
                            "easeOutCubic",
                            "${main5}",
                            '291px',
                            '77px'
                        ],
                        [
                            "eid258",
                            "opacity",
                            1000,
                            750,
                            "easeOutCubic",
                            "${main5}",
                            '0',
                            '1'
                        ],
                            [ "eid263", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${p50_slideshow}', [] ] ]
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

                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1000px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "SlideSymbol4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            clip: 'rect(0px 800px 200px 0.79364013671875px)',
                            rect: ['0', '0', '800', '200', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '0px', '800px', '200px', 'auto', 'auto'],
                                fill: ['rgba(101,255,77,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [71, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: 'PAGE 4',
                                type: 'text',
                                rect: ['271', '55', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy',
                            text: 'Add text and animations to me!',
                            type: 'text',
                            rect: ['223', '144', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800', '200']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid43",
                            "clip",
                            0,
                            1000,
                            "swing",
                            "${Group}",
                            [0,800,200,0.7936400175094604],
                            [0,800,200,400],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid44",
                            "clip",
                            1000,
                            370,
                            "swing",
                            "${Group}",
                            [0,800,200,400],
                            [0,581.74609375,200,265.873046875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid45",
                            "clip",
                            1370,
                            630,
                            "swing",
                            "${Group}",
                            [0,581.74609375,200,265.873046875],
                            [0,800.0001220703125,200,-0.79364013671875],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
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

                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1000px', '400px']
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
            "p50_slideshow": {
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
                            id: 'bg-6',
                            opacity: '0',
                            rect: ['0', '0', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg-6.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0', '0', '1000px', '400px', 'auto', 'auto'],
                            id: '_1962_early-cec-rendering',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/1962_early-cec-rendering.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0', '0', '1000px', '400px', 'auto', 'auto'],
                            id: 'main4',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/main4.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1000px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 10250,
                    autoPlay: true,
                    data: [
                        [
                            "eid256",
                            "opacity",
                            9629,
                            621,
                            "easeOutCubic",
                            "${main4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid252",
                            "opacity",
                            4597,
                            597,
                            "easeOutCubic",
                            "${_1962_early-cec-rendering}",
                            '0',
                            '1'
                        ],
                        [
                            "eid241",
                            "opacity",
                            0,
                            1000,
                            "easeOutCubic",
                            "${bg-6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid242",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${main4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid254",
                            "display",
                            9629,
                            0,
                            "easeOutCubic",
                            "${main4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${_1962_early-cec-rendering}",
                            'none',
                            'none'
                        ],
                        [
                            "eid250",
                            "display",
                            4597,
                            0,
                            "easeOutCubic",
                            "${_1962_early-cec-rendering}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index400_edgeActions.js");
})("EDGE-351832807");
