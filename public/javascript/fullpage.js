$(document).ready(function() {

    $('#fullpage').fullpage({

        //options here
        menu: '#menu',
        lockAnchors: false,
        anchors:['RicardoLockmer', 'Lenguajes', 'Experiencia', 'Habilidades', 'Curriculum'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Main', 'Lenguaje', 'Experiencia', 'Habilidades', 'Curriculum'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 100,
        scrollBar: false,
        loopBottom: true,
        loopTop: true,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: true,
        // normalScrollElements: '#null, .null',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        dropEffect: false,
        dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
        waterEffect: false,
        waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
        cards: false,
        cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        // onLeave: function(origin, destination, direction){},
        // afterLoad: function(origin, destination, direction){},
        // afterRender: function(){},
        // afterResize: function(width, height){},
        // afterReBuild: function(){},
        // afterResponsive: function(isResponsive){},
        // afterSlideLoad: function(section, origin, destination, direction){},
        // onSlideLeave: function(section, origin, destination, direction){}
    });

    S//methods
    $.fn.fullpage.setAllowScrolling(true);
});
