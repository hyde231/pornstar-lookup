const sites ={
    eurobabeindex: {
        name:       "Eurobabeindex",
        url:        "https://www.eurobabeindex.com",
        idToUrl:    (id) => `https://www.eurobabeindex.com/sbandoindex/${id}.html`,
        idToPicUrl: (id) => `https://www.eurobabeindex.com/sbandoindex/thumbnails/shadows/${id}.jpg`,
        favicon:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVQ4jWM4c+bMf0oww5kzZ/6Hhq7CwGfOnPn/40YGCoZpevfu3f93796RbgDMEJwGoDsPWdNIMQDdILJjgWwDBj4MBt4AipMy2ZmJEgwACdw1nu9RXwgAAAAASUVORK5CYII=",
    },
    thenude: {
        name:       "The Nude",
        url:        "https://www.thenude.com",
        idToUrl:    (id) => `https://www.thenude.com/${id}.htm`,
        idToPicUrl: (id) => `https://static.thenude.com/models/${id}/starthumb.jpg`,
        favicon:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC3ElEQVRYhe2X30taYRjHX8dezjKOKC6treVSwubsQGJMCEyW4I2M7eYwWgRSXRhteaNgY+JFshhywhBTNAlk6KSU7roRuoghEoTY7S66CvonvrsI3yGxK08J0cWXw3nOOe/zOc/7/DiHEEIuCCHokS5ID523dc8AeGUfnHYBbocNbocNGhV/twDGF0Oo5eNoVrJolFKYnrTePcDxnoRWNYfT8s4DwAPAPQXgFApwlN4tQLvBBH0iEuFVpCMBSCE/vnz6gCnrOAO6FQDBbEQ6EkCjlML54e4N1YtJxNYWMTKkkx/AaRdwlNnE+eEuWtUcO57tZ9CsZDvsP398hXfGgVo+Lg+AxWTocF4vJiGF/BA9LrgdNogeF6SQH/ViEq1qDq1qDkeZTTRKqe4BOEohhfzM+fGeBO+M40bycZTi/dtpFvZWNYdmJYtmJdsdgGA24qSQYG8ielwdVTBIH4FTKJht3utm2yILwLzXzfa28D0MXtl3vS1PHqPwUo3f5qfYHlZBTx+BEAKNisev+Df5IhD0iSzL15fnmH17WIUrQY/LiWt9Huhn16IrCzg/3JUHYH15jgEEfSILfXlUwwCuBD1iz/gbz8gC4P/4jgFIIT9LviWtEn9e63A5oUfz1QBmeY4lYyK8Kh+A22HDaXkHrWoOtXwcFpOBRWGW57CkVeJN/7+KsJgMrP5lAdBp1TjYirLSSoRXodOq/3tvOhLocN41ACEEoseFs/0MWzgdCWB60gqNigdHKTQqHk67gPxGkIGe7WdYOXYNwFGK6MoCmpUsc1AvJnGwFUV+I4iDrWhHF2yUUoitLco7C3hlH4I+EfVisqPvt9U+P96TMO91w2IyyD8NOUrhtAuQQn7U8nE0SimclndQLyZxlNlEbG0RNssYCCEYfT7I5sFJISHvBwlHKUaGdJiyjsNpF2CzjEGnVXe0ZI5SCGYjbJYxCGYj66CyANySeg/Q09/zv7h1rxXrX+evAAAAAElFTkSuQmCC",
    },
    indexxx: {
        name:       "Indexxx",
        url:        "https://www.indexxx.com",
        idToUrl:    (id) => `https://www.indexxx.com/m/${id}`,
        idToPicUrl: null, //image urls have random number added, and can't be hotlinked
        favicon:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAO0lEQVRYhe3SsQkAMAwDQe3fZt1AskBKgzE5wfdXKCv7dBYAgJGA1wD+AlQGMPMDAAAAAAAAlQEAtAMulKOyHUzgQjoAAAAASUVORK5CYII=",
    },
    freeones: {
        name:       "Freeones",
        url:        "https://www.freeones.com",
        idToUrl:    (id) => `https://www.freeones.xxx/${id}`,
        idToPicUrl: null, //image urls are uuids
        favicon:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEPUlEQVRYhdWWe0idZRjAn3Nx5/qZctBtNjfmNjaqk5CndaIRshJkJhgWm6QeNwiHNMJGjS2C1gWthTFZNQYT6TIRpmWDpAbWH4aXosuJWheyyURxG25N1O87t19/6Bnf8Xxe1tTogeff9/d7nvd9n/cV+R9Hiog8KSLHReSgiGSttEChiFwVEUQkJiJtIrJ6JQUaZuDxDInInmUlAjZgQ2tr6y673f7TLAGys7NfBKxLDbUA9wAvAGchduHD5qYbNpstpoebTCYaGhqGgDbgMJB7WzKAaWaR44TUPxn4NhrpeJPIOwGeeXhLQuUiQmpqKl1dXcxEDPgLeBfwAaZbhSvAs4S136PB84Te24d2YBNahZOhJ+z4PKYkAZ/Px+joKAYxMNO99MXCs4EmLl+cCn/wPFrNetRyB2qlm3CVQku+A7tFkgRyc3MZHBw0EgDQgBZg00LwHODT2B+9sdCrj6JWuFAr3agBBTWgoAUU9m9LSYKLCGazmdraWiYmJuaSAPgC2DYXfDXQFv35K7RDedNVz4Dj8JEyN9szLIYCIoLD4aC+vp5wODyfxGfA+tnwVUADA99FtcPbUSsS4WpAIVyl8PVjTjy25P3XZ3p6Ou3t7fMJAJwEXHqBMq5fvh46VpJUeTwjVQqnd9ixmOaGx7O0tJTJycn5BCaBQBx+J9AdOdeQsN9GHTh076oF4SJCQUEB4+PjC3Xhe+BuAdYC56I/nkervQu1wjmnwOt5NkSErXeYcaeY8NhMhh05evToQvC4wH3xLmwFvox+04F2YPP06TcQeMM3LfDU5hQeybKyOyeFtc7EM+Fyuejs7FwI/iuQP/sg5gK9ke4W1JoNqJUuQwGLSXBap6tf4zAlzQSPx0N/f/988AGgcK6r6CcW/SHSdRq1OitBQgsoDO12cybfwdsP2Km738aDmclX0mw209jYOBf8EvC4IVwnkU80dCHS2Yj6dGbSIIruVbhRofBano0Me2L7rVYrLpeLuro6I/gIsIfFvAtAISF1IPJJHeo+T4LERKXCkdxV2AzGsc/no6Ojw+hNuAIEAPOCcJ1EKerEULj1JdS9aTffgu4iJ2scycPI7XbT3NxsVPk1YD9gWTR8RsAEVDDx9+Xw+8+hVqUSqVI49ZDxMCovLzcaPuNALZByS3CdhAWo5sbVsfCpaiJVbtp2OnAYtL+mpoZYLKaHTwJHAPu/guskrMBBro2MR0+U80uJg43u5C0oLi5mamoqDteAVwDnbcF1EnbgZa5cnBqrK2FHZrKA1+tleHgYIAwcA5QlgeskXMBb2qXfQmW7diYJFBUVMTY2FgFOAGlLCtdJpAEng8Fg1O/334T7/X6CwWAMaAIylgWuk8gEPurt7cXr9eL1eunr6wM4A6xdVrhOYh3wcXd3Nz09PTD9FV+3InCdRA7wOdNfrI0rCtdJbAFy/hP4UsU/aTJuqVsbfUgAAAAASUVORK5CYII=",
    },
    pornpics: {
        name:       "PornPics",
        url:        "https://www.pornpics.com",
        idToUrl:    (id) => `https://www.pornpics.com/?q=${id}`,
        favicon:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMUlEQVRYhe3Xz2vTYBgH8MyLN0EQL6J/gCwhsFMOUumh3gveRAy0F5FSsRQKBU+llhZF1uKPg5VeXBE2UacgQtFhrSgRBS/OOW0nBbum77r+WJK++XooxoW2O4y+ycUHvhDe5CUfAk94Hw4uFzfphlH+hebx22gezaF94Tm0J98AnToDMHsGmkeyaHBpWzYPz6N9/hm0R6swuzo7gF6qosGlQbxF6K9r6Fx6ieaxW3bMoZton1vGzuJXmNv7x4wFdBNv0ZorYKfw5d+iQaGvbKBzuYTWXMEWcnoBvWvvMFgn0wE4WRZAVVUEg0H4fD4m8fv9qFQqkwGRSASCICAajSIej081sVgMkiTB4/GAUjoeIMsyQqEQm+8MIJVKged5GIYB4i1arW0DJBIJZoBsNmsB1JP3ht00k3EHoD1dsxCuAACAeBbcA9B6B5sHr7sH6N/9hAaXRvPEHXcAxFtEg0ujc6XkbhcY7+tDgKn2HQeos3mAmuBorQ39xQ/HAd2rbwAAXD+rQFtecxYwm8fg8+8hgJx64Digffaxtc41DmQcB2hLq7sAXNoChMNhZoBkMmn7E44FCILA7DwgiuJ4QD/3EfrKBmRZBs/zzDMC+HvxHxAIBJi/XBTFyYByuQxJkpgCcrncSHfYjuWEECiKwiTVahWmae4N2G8N1gl68wq2zjxEi8+PRrgP+nNr7N7pDibaAPqrGrYv7hrlZjLo3fgwcQu7yUinoN8JaL2z52N/ABUiSp88sz26AAAAAElFTkSuQmCC",
    },
    babepedia:{
        name:       "Babepedia",
        url:        "https://www.babepedia.com",
        idToUrl:    (id) => `https://www.babepedia.com/babe/${id}`,
        idToPicUrl: (id) => `https://www.babepedia.com/pics/${id}.jpg`,
        favicon:    "data:image/png;base64,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",
    },
    adultempire: {
        name:       "Adult Empire",
        url:        "https://www.adultempire.com",
        idToUrl:    (id) => `https://www.adultdvdempire.com/${id}.html`,
        favicon:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADDklEQVRYhe1WTWgdVRi9kiDfNxniS1tMwYKllErEwHfuvDcmkeoggS7clNZZlmzShWYjLXFhQdAERHQRUKJIFVrx3uSVpuhCE0g0uqoKmiJ0UUmEWNpEQ4vWBNu0eW4yYTLeefnpQhfvwLeZ+e6cc889995RqoYaavg/IYqieq31syLyCgALYBTAJIBxAGcBnCwWi4+5xo41NzdYzztumT81zNcs0bIlWjHM84b5a8N88kKhUHASB0GwC8DbAH4TkcpGBeBcGIY7k/HDnnfYMl83RJWqxXzTEHWtIy+VSrtF5K/NEGfqYhRF9Yb5pQ2JM2U97/U1AW1tbXtzCG4BmBWRezkuXD7j+887CYi+GGY+Osz81BBzbIm+cvQccwn4UUS6giDYlcpFAcDprICDra1O2y3zJ5VK5YG0y+U4rjPMn2WWY6Hc1PRQIuBvrXVPdmCCOI4fFJEbKQHTxvO6XbM/T/So6xtl33/csRQ9qqOj42ER6XCmcxXt7e2PiMhMyv5ByzzimP2sLRT25pVhXsgsw1guaRiGB7TWpwB8l7Vfa33cEv2y1fA5BM+tI42iyBeRF0Xk22o7QGt9xBIt3bcAottKKaWCIPAA9InITQfhCoBxEZlLngVBcNgS3XLs8wXDPLmVSsj/ZTOAZa31QKlU2qeUUgCmUu9eMERXHJZ+Xy1LTqzOPEu+FATBk5m+tIDTlnnYYeu9ckPD7i0JEJFph4APHUKnUj3zZ30/zgnWx5vhHfL9JwzzGyonaOs+EobhThG5mu4JRLot8w85Afso7+IpNzbuN0TvG6I7hnlSicifDgfuAjgB4Gmt9cvpAKZ6fu/ds+cZQ/RHTsIXLfOI8bz+IaJXLdF7lnkqE9pJJSIfbOMiSuqnvubmTsP86zbPgXeTs/5SNSIAoyLSn/N+5lBLS6dhHtjM2WCJVizRhPW859bWZXUrvpYK5G0APwMYLBaLoVJKxXFcJyJvJv8MABYBfKO17k0ur8937Ghc/Td4yzKfs0QThuhLyzximd8xRF15d0UNNdTwn+Efp++qZ6e385AAAAAASUVORK5CYII=",
    },
    boobpedia: {
        name:       "Boobpedia",
        url:        "http://www.boobpedia.com",
        idToUrl:    (id) => `http://www.boobpedia.com/boobs/${id}`,
        favicon:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVQ4jWNgwAJmpqX9x4axqcWq8f+ZM1gxXoPwacRmENmasRpCkQHkaEYxBJ8BZ2bOhGOSDUDXhM2QQW4A0WEw8OmAKkmZKpkJm0HEZGcA2CquOzxJIQUAAAAASUVORK5CYII=",
    },
    tpdb: {
        name:       "ThePornDB",
        url:        "https://metadataapi.net",
        idToUrl:    (id) => `https://metadataapi.net/performer/${id}`,
        favicon:    "data:image/png;base64,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",
    },
    mypornstarbook: {
        name:       "MyPornstarBook",
        url:        "https://www.mypornstarbook.net",
        idToUrl:    (id) => `https://www.mypornstarbook.net/pornstars/${id.substring(0,1)}/${id}/index.php`,
        idToPocUrl: (id) => `https://www.mypornstarbook.net/pornstars/${id.substring(0,1)}/${id}/tnmodel.jpg`,
        favicon:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVQ4jWNgSPv/nyLMkPafbIBiAKk2YzXAoef//4bNEIysWKESIa5QiceA+k0I58XPRxgw/yhC3KGHSAP234SICRSg+ptoA/7////foBkh9v4rCQasOweh5x/9///+m///zz+CuIhoA+o3QTQhhwfJBsTPRzidP58MA/jzEQYxpJFhAHrCIcoAmF+R0wAM9++ByBk04zGAoqRMDoAbQAkGAGD/DurQt37JAAAAAElFTkSuQmCC",
    },
};

module.exports = { sites };