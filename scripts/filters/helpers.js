angular.module("libraryApp")
    .filter('capitalize', function() {
        return function(input, char) {
            if (isNaN(input)) {
                var char = char - 1 || 0;
                var letter = input.charAt(char).toUpperCase();
                var out = [];
                for (var i = 0; i < input.length; i++) {
                    if (i == char) {
                        out.push(letter);
                    } else {
                        out.push(input[i]);
                    }
                }
                return out.join('');
            } else {
                return input;
            }
        }
    })
    .filter('removeAccents', function () {
        return function (source) {
            var accent = [
                /[\300-\306]/g, /[\340-\346]/g, // A, a
                /[\310-\313]/g, /[\350-\353]/g, // E, e
                /[\314-\317]/g, /[\354-\357]/g, // I, i
                /[\322-\330]/g, /[\362-\370]/g, // O, o
                /[\331-\334]/g, /[\371-\374]/g, // U, u
                /[\321]/g, /[\361]/g, // N, n
                /[\307]/g, /[\347]/g, // C, c
            ],
                noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

            for (var i = 0; i < accent.length; i++){
                source = source.replace(accent[i], noaccent[i]);
            }

            return source;
        }
    })
    .filter('searchReplace', function () {
        return function (str, search, replace) {
            str = str || '';
            search = search || '';
            replace = replace || '';
            return str.replace(new RegExp(search, 'g'), replace);
        }
    })
    .filter('toDate', function () {
        return function (unix_timestamp) {
            return new Date(unix_timestamp*1000);
        }
    })
    .filter('toTimestamp', function () {
        return function (str) {
            return new Date(str).getTime()/1000;
        }
    })
    .filter('getIcon', function () {
        return function (str) {
            var name = str.split(" ");
            return name[0].charAt(0) + name[1].charAt(0);
        }
    })
    .filter('trim', function () {
        return function (str, search, replace) {
            str = str || '';
            search = search || '';
            replace = replace || '';
            return str.replace(new RegExp(search, 'g'), replace);
        }
    });
