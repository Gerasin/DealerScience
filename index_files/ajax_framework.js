Object.keys = Object.keys || (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"),
        DontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        DontEnumsLength = DontEnums.length;

    return function (o) {
        if (typeof o != "object" && typeof o != "function" || o === null)
            throw new TypeError("Object.keys called on a non-object");

        var result = [];
        for (var name in o) {
            if (hasOwnProperty.call(o, name))
                result.push(name);
        }

        if (hasDontEnumBug) {
            for (var i = 0; i < DontEnumsLength; i++) {
                if (hasOwnProperty.call(o, DontEnums[i]))
                    result.push(DontEnums[i]);
            }
        }

        return result;
    };
})();

var ajaxFramework = {};

(function (W, $) {
    var ajaxFrameworkRequests = [];

    //Sets the base defaults for the ajax call
    var setAjaxDefaults = function (isAsync, type) {
        $.ajaxSetup({
            error: function (xhr, textStatus, errorThrown) {
                if (W.console && console.log) {
                    console.log('--error--');
                    console.log(arguments);
                    console.log('textStatus' + textStatus);
                    console.log('errorThrown' + errorThrown);
                    console.log('--/error--');
                }
            },
            async: isAsync,
            type: (type === undefined ? "POST" : type),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{}"
        });
    };

    //*takes an array of parameter names and the matching array of parameter values*
    var dataBuilder = function (parameterNames, parameterValues) {
        var dataString = "";
        if (parameterNames != null && parameterNames.length > 0) {
            dataString += "{";
            for (var count = 0; count < parameterNames.length; count++) {
                dataString += parameterNames[count] + ":'" + parameterValues[count] + "'";
                if ((count + 1) != parameterNames.length) {
                    dataString += ",";
                }
            }
            dataString += "}";
            return dataString;
        } else return "";
    };

    //builds the array from the string values passed in, splitting on commas or a passed in delimiter
    var buildDataArrayFromString = function (value, delimiter) {
        if (value != null && !isNothing(delimiter)) {
            return value.split(delimiter);
        } else if (value != null) {
            return value.split(',');
        } else return null;
    };

    var postData = function (location, method, parameterNames, parameterValues, functionCall, type) {
        var parsedData, localUrl = location + method, reformattedData = [], functionCallTmp = functionCall;
        abortDupeRequests(localUrl, functionCall);
        setAjaxDefaults((functionCall !== undefined), type);
        if (parameterNames == 'koToJson') {
            var data = basestuff.replaceAll(',', '&', basestuff.replaceAll('&', '%26', basestuff.replaceAll(':', '=', basestuff.replaceAll('}', '', basestuff.replaceAll('"', '', basestuff.replaceAll('{', '', JSON.stringify(parameterValues))))))).replace('?', '%3F');
            var siteMetadata = jQuery.cookie('SiteMetadata');
            var serviceSession = jQuery.cookie('ServiceSession');

            ajaxFrameworkRequests.push({
                Request: $.ajax({
                    url: localUrl,
                    data: data,
                    success: function (data) {
                        if (typeof (data.Data) !== 'undefined') {
                            parsedData = data.Data;
                            if (parsedData instanceof Object && Object.keys(parsedData).length > 1) {
                                for (property in parsedData) {
                                    reformattedData.push(parsedData[property]);
                                }
                            }
                        }
                        if (functionCallTmp !== undefined) {
                            var methodCall = functionCallTmp.split('|');
                            var fn = W[methodCall[0]];
                            if (reformattedData.length == 0) { fn[methodCall[1]](parsedData); }
                            else { fn[methodCall[1]](reformattedData); }
                        }
                        removeCompletedCallFromRequestList(this, localUrl, functionCall);
                    },
                    headers: { 'Site-Metadata': siteMetadata, 'Service-Session': serviceSession }
                }),
                URL: localUrl,
                CALLBACK: functionCall
            });
        }
        else if (parameterNames != null && parameterNames.length > 0) {
            ajaxFrameworkRequests.push({
                Request: $.ajax({
                    url: localUrl,
                    data: dataBuilder(parameterNames, parameterValues),
                    success: function (data) {
                        if (typeof (data.d) !== 'undefined') {
                            parsedData = JSON.parse(data.d);
                            if (parsedData instanceof Object && Object.keys(parsedData).length > 1) {
                                for (property in parsedData) {
                                    reformattedData.push(parsedData[property]);
                                }
                            }
                        }
                        if (functionCallTmp !== undefined) {
                            var methodCall = functionCallTmp.split('|');
                            var fn = W[methodCall[0]];
                            if (reformattedData.length == 0) { fn[methodCall[1]](parsedData); }
                            else { fn[methodCall[1]](reformattedData); }
                        }
                        removeCompletedCallFromRequestList(this);
                    }
                }),
                URL: localUrl,
                CALLBACK: functionCall
            });
        }
        else {
            $.ajax({
                url: location + method,
                success: function (data) {
                    if (typeof (data.d) !== 'undefined') {
                        parsedData = JSON.parse(data.d);
                        if (parsedData instanceof Object && Object.keys(parsedData).length > 1) {
                            for (property in parsedData) {
                                reformattedData.push(parsedData[property]);
                            }
                        }

                        if (functionCallTmp !== undefined) {
                            var methodCall = functionCallTmp.split('|');
                            var fn = W[methodCall[0]];
                            if (reformattedData.length == 0) { fn[methodCall[1]](parsedData); }
                            else { fn[methodCall[1]](reformattedData); }
                        }
                    }
                }
            });
        }

        if (reformattedData.length > 0) { return reformattedData; }
        else return parsedData;
    };

    var abortDupeRequests = function (localUrl, callback, isLazy) {
        if (ajaxFrameworkRequests.length > 0) {
            var count = ajaxFrameworkRequests.length;
            for (var i = 0; i < count; i++) {
                var request = ajaxFrameworkRequests[i];
                if (request.URL == localUrl && (request.CALLBACK == callback || isLazy === true)) {
                    request.Request.abort();
                    ajaxFrameworkRequests.splice(i, 1);
                    count--;
                }
            }
        }
    };

    var removeCompletedCallFromRequestList = function (ajaxCall, localURL, functionCall) {
        for (var i = ajaxFrameworkRequests.length - 1; i >= 0; i--) {
            if (ajaxFrameworkRequests[i].Request == ajaxCall) { ajaxFrameworkRequests.splice(i, 1); }
            else if (ajaxFrameworkRequests[i].URL == localURL && ajaxFrameworkRequests[i].CALLBACK == functionCall) { ajaxFrameworkRequests.splice(i, 1); }
            else if (ajaxFrameworkRequests[i].URL == localURL && ajaxFrameworkRequests[i].CALLBACK === undefined) { ajaxFrameworkRequests.splice(i, 1); }
        }
    };

    // / / / / / / / 
    //
    // NEW CODE
    //
    // / / / / / / /

    // Short-hand for !undefined && !null check.
    var isNothing = function (obj) {
        return typeof (obj) === 'undefined' || obj === null;
    },

    // Makes an AJAX call, given the settings required to make that call.
    // Expects cleaned input.
    executeAjaxCall = function (settings) {
        var suppliedCallback = settings.extensions.success;
        abortDupeRequests(settings.path, suppliedCallback, settings.isLazy);

        // Default settings for AJAX requests through jQuery.
        var ajaxSettings = {
            type: settings.httpMethod,
            url: settings.path,
            contentType: 'application/json; charset=UTF-8'
        };

        // If arguments were passed, arrange for them to be carried in the HTTP request body.
        if (!isNothing(settings.data) && settings.data !== {} && settings.httpMethod !== 'GET') {
            ajaxSettings.data = JSON.stringify(settings.data);
            ajaxSettings.dataType = 'json';
        }

        // Supplied extensions override any of the default settings except for 'success'.
        $.extend(ajaxSettings, settings.extensions);

        var requestHandle = {};
        var result;

        // Arrange for the jQuery-AJAX success callback to come to this function below.
        // Unless requested otherwise, we will attempt to parse the returned JSON before
        // making the callback to the supplied function.
        ajaxSettings.success = function (data) {
            if (ajaxSettings.async !== false) {
                removeCompletedCallFromRequestList(requestHandle.Request);
            }

            // Try to make a call back to the supplied success function.

            if (settings.extensions.callbackWithRawResults === true) {

                result = data;

            } else if (!isNothing(data.d)) { // Typical of the data returned by an ASMX request.

                try {
                    // Try to parse the return data.
                    result = JSON.parse(data.d);
                } catch (e) {
                    // Perhaps the return data wasn't JSON.
                    result = data.d;
                }

                // Results look like those from the service layer.
            } else if ((!isNothing(data.Success) && data.Success === true) || (!isNothing(data.success) && data.success === true)) {

                var resultData = data.Data || data.data || null;

                // Service Layer returns { Data: {}, Success: T/F, Message: '' }
                !isNothing(resultData) ? result = resultData : result = undefined;

            } else if ((!isNothing(data.Success) && data.Success === false) || (!isNothing(data.success) && data.success === false)) {
                var error = settings.extensions.error;
                if ($.isFunction(error)) {
                    error();
                }
            } else {

                // Fallback to the raw data.
                result = data;

            }

            if ($.isFunction(suppliedCallback)) {
                suppliedCallback(result);
            }
        };

        if (settings.extensions.async === false) {
            $.ajax(ajaxSettings);
            return result;
        } else {
            requestHandle = { Request: $.ajax(ajaxSettings), URL: settings.path, CALLBACK: suppliedCallback };
            ajaxFrameworkRequests.push(requestHandle);
            return undefined;
        }
    },

    // Reponsible for generating a function that executes an AJAX call.
    // Also responsible for sanitizing the parameters before moving forward.
    createAjaxCaller = function (httpMethod) {
        // Returned function args:
        // endpoint - The web endpoint at which the AJAX request is to be sent.
        // args - The arguments to be carried as part of the AJAX request.
        // settings - Settings to be forwarded to $.ajax(). If settings.callbackWithRawResults
        //            is set to true, any provided success callback will have the raw AJAX results
        //            passed to it as the first parameter.

        // If settings.async is set to false, the the function will return the results of $.ajax().
        // Otherwise, undefined is returned as though the function were void.

        return function (endpoint, args, settings) {
            // This allows for two parameters to be passed, where the second parameter is
            // the settings object instead of the third. Data can still be passed with only
            // two parameters if settings.data is set to the arguments to be forwarded to AJAX.
            // Also remember that this settings variable can just be a function, in which
            // case it is used as the success callback.
            if (isNothing(settings)) {
                settings = args;
                args = undefined;
            }

            var ajaxSettings = {
                httpMethod: httpMethod,
                path: endpoint || '',
                extensions: $.isFunction(settings) ? { success: settings } : (settings || {}),
                isLazy: !isNothing(args) && !isNothing(args.isLazy) ? args.isLazy : true
            };

            // GET carries the args as part of the query string, not as part of the
            // request body.
            if (httpMethod === 'GET' && !isNothing(args)) {
                var argsArray = [];
                $.each(args, function (name, value) {
                    argsArray.push({ name: name, value: value });
                });

                var validArgs = argsArray.filter(function (a) { return !isNothing(a.value); });

                if (validArgs.length > 0) {
                    ajaxSettings.path += '?';

                    for (var i = 0; i < validArgs.length; i++) {
                        var arg = validArgs[i];

                        ajaxSettings.path += arg.name + '=' + arg.value;
                        if (i + 1 < validArgs.length) {
                            ajaxSettings.path += '&';
                        }
                    }
                }
            } else if (!isNothing(args) && args !== {}) {
                ajaxSettings.data = args;
            }

            // Can't make an AJAX request with empty data object as the passed args.
            if (ajaxSettings.data === {}) {
                ajaxSettings.data = undefined;
            }

            return executeAjaxCall(ajaxSettings);
        };
    };

    /* * * * * * * * * * * * * * * * *
     *                               *
     * *** PUBLIC API DEFINITION *** *
     *                               *
     * * * * * * * * * * * * * * * * */

    $.extend(ajaxFramework, {
        // The method called from outside the framework to instantiate an ajax call.
        // Deprecated 9/5/2014. Still functional, but prefer the new HTTP REST methods.
        buildAjaxCall: function (location, method, names, values, delimiter, functionCall, type) {
            if (names != 'koToJson') {
                var nameSet = buildDataArrayFromString(names, delimiter);
                var valueSet = buildDataArrayFromString(values, delimiter);
                return postData(location, method, nameSet, valueSet, functionCall);
            }
            else { return postData(location, method, names, values, functionCall, type); }
        },

        // Executes an HTTP GET request.
        get: createAjaxCaller('GET'),

        // Executes an HTTP POST request.
        post: createAjaxCaller('POST'),

        // Executes an HTTP PUT request.
        put: createAjaxCaller('PUT'),

        // Executes an HTTP DELETE request.
        httpDelete: createAjaxCaller('DELETE')
    });

})(window, jQuery);


var basestuff = {
    replaceAll: function (find, replace, string) { return string.replace(new RegExp(find, 'g'), replace); }
}