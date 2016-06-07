// Global Lexus object
var _L = {
    _dataCache: {},
    events: {
        gotNVI: false, // default value
        link_run: false
    },
    'modelmatch': {
        'IS': 'IS',
        'ES': 'ES',
        'GS': 'GS',
        'LS': 'LS',
        'RX': 'RX',
        'GX': 'GX',
        'LX': 'LX',
        'ISC': 'ISC',
        'CTH': 'CTh',
        'RXH': 'RXh',
        'ESH': 'ESh',
        'GSH': 'GSh',
        'LSH': 'LSh',
        'ISF': 'ISF',
        'LFA': 'LFA',
        'RCF': 'RCF',
        'RC': 'RC',
        'NX': 'NX',
        'NXH': 'NXh',
        'GSF': 'GSF'
    },
    'model': {
        'IS': {
            currentyear: "2016",
            modelline: "IS",
            modelcode: "IS",
            bodystyle: "Sedan",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-IS-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=IS&modelCode=95"
            }
        },
        'ES': {
            currentyear: "2016",
            modelline: "ES",
            modelcode: "ES",
            bodystyle: "Sedan",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-ES-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=ES&modelCode=9399"
            }
        },
        'GS': {
            currentyear: "2016",
            modelline: "GS",
            modelcode: "GS",
            bodystyle: "Sedan",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-GS-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=GS&modelCode=9399"
            }
        },
        'LS': {
            currentyear: "2016",
            modelline: "LS",
            modelcode: "LS",
            bodystyle: "Sedan",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-LS-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=LS&modelCode=9399"
            }
        },
        'RX': {
            currentyear: "2016",
            modelline: "RX",
            modelcode: "RX",
            bodystyle: "SUV",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-RX-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=RX&modelCode=9399"
            }
        },
        'GX': {
            currentyear: "2016",
            modelline: "GX",
            modelcode: "GX",
            bodystyle: "SUV",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-GX-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=GX&modelCode=9399"
            }
        },
        'LX': {
            currentyear: "2016",
            modelline: "LX",
            modelcode: "LX",
            bodystyle: "SUV",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-LX-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=LX&modelCode=9399"
            }
        },
        'CTh': {
            currentyear: "2016",
            modelline: "CTh",
            modelcode: "CTh",
            bodystyle: "Hybrid",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-CTh-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=CTh&modelCode=9399"
            }
        },
        'RXh': {
            currentyear: "2016",
            modelline: "RX",
            modelcode: "RXh",
            bodystyle: "Hybrid",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-RX-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=RX&modelCode=9399"
            }
        },
        'ESh': {
            currentyear: "2016",
            modelline: "ES",
            modelcode: "ESh",
            bodystyle: "Hybrid",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-ES-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=ES&modelCode=9399"
            }
        },
        'GSh': {
            currentyear: "2016",
            modelline: "GS",
            modelcode: "GSh",
            bodystyle: "Hybrid",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-GS-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=GS&modelCode=9399"
            }
        },
        'LSh': {
            currentyear: "2016",
            modelline: "LS",
            modelcode: "LSh",
            bodystyle: "Hybrid",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-LS-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=LS&modelCode=9399"
            }
        },
        'RCF': {
            currentyear: "2016",
            modelline: "RC",
            modelcode: "RCF",
            bodystyle: "F Performance",
            brochures: {
                "link": "",
                "mail": ""
            }
        },
        'RC': {
            currentyear: "2016",
            modelline: "RC",
            modelcode: "RC",
            bodystyle: "Coupe",
            brochures: {
                "link": "",
                "mail": ""
            }
        },
        'NX': {
            currentyear: "2016",
            modelline: "NX",
            modelcode: "NX",
            bodystyle: "SUV",
            brochures: {
                "link": "",
                "mail": ""
            }
        },
        'NXh': {
            currentyear: "2016",
            modelline: "RC",
            modelcode: "RCh",
            bodystyle: "Hybrid",
            brochures: {
                "link": "",
                "mail": ""
            }
        },
        'GSF': {
            currentyear: "2016",
            modelline: "GS",
            modelcode: "GSF",
            bodystyle: "F Performance",
            brochures: {
                "link": "",
                "mail": ""
            }
        },
        'default': {
            currentyear: "",
            modelline: "",
            modelcode: "",
            bodystyle: "",
            brochures: {
                "link": "http://www.lexus.com/lexus-share/v2/img/PDF/Lexus-CTh-Brochure.pdf",
                "mail": "https://secure.lexus.com/lexus/ssl/models/orderbrochure.do?modelName=CTh&modelCode=9399"
            }
        }
    },
    // to get the query string from the URL
    getQuery: function () {
        var vars = [], hash;
        if (window.location.href.search(/\?/) > -1) {
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
        }
        return vars;
    },
    getQueryParam: function (url, param) {
        //Return given param value from given url query string.
        var query = url.toLowerCase().split("?")[1];
        if (query !== undefined) {
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (pair[0] === param.toLowerCase()) {
                    return pair[1];
                }
            }
        }
    },
    getLexusInfo: function (type, model, page, file) {
        //console.log('type:'+type+', model:'+model+', page:'+page+', file:'+file+'');
        var x;
        $.ajax({
            async: false,
            url: '/Services/Dealers/Lexus.asmx/GetData',
            success: function (data) {
                if (data.d) {
                    x = JSON.parse('{' + data.d + '}');
                } else {
                    //handle failed search
                    alert("Lexus Info FAIL");
                }
            },
            error: function (data) {
                console.log("error: getLexusInfo");
            },
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: '{"type":"' + type + '", "model": "' + model + '", "page":"' + page + '", "file":"' + file + '"}'
        });
        return x;
        /*
		 3 different feeds:
		 'globalnav' (type only),
		 'modelinfo' (type and supply model),
		 'modelpage' (type, model, page, file if necessary)
		 In the case of pages with subpages, they should be page:[page]/[subpage]
		 'file' overwrites the 'index.json' at the end of the URL the webservice calls.
		 */
    },

    // Gets lexus NVI setting by name.
    // callback:	The function to be called once the setting has been retrieved.
    // settingName: The name of the NVI setting to retrieve. (ex. "acceptedNewInventoryTermsAndConditions")
    // isAsync:		If true, will retrieve the setting asynchronously. If false, will block the main thread
    //				to retrieve the setting.
    isGettingLexusNvi: false,
    getLexusNvi: function (callback, settingName, isAsync) {
        if (isAsync === undefined) {
            isAsync = true;
        }

        var lexusKey = 'isSiteSignedUpForNvi.' + (settingName || '');

        // Caches the passed value, then issues the callback.
        var setCachedValueAndCallback = function (val) { _L._dataCache[lexusKey] = val; callback(val); }

        // Gets the cached value for this NVI setting.
        var getCachedValue = function () { return _L._dataCache[lexusKey]; }

        var cachedValue = getCachedValue();

        // if no value has been cached
        if (typeof (cachedValue) === "undefined") {
            // If a retrieval is already in progress, then wait to be signaled.
            if (_L.isGettingLexusNvi) {
                $('body').on('_L.getLexusNvi.complete', function () {
                    callback(getCachedValue());
                });
            } else {
                // Otherwise get the data.
                _L.isGettingLexusNvi = true;
                $.ajax({
                    url: "/Services/DealerGroupService.asmx/GetGroupSettings",
                    data: JSON.stringify({ "groupName": "Lexus" }),
                    contentType: 'application/json; charset=UTF-8',
                    type: 'POST',
                    async: isAsync,
                    success: function (data) {
                        var response = JSON.parse(data.d);

                        // Data retrieved, find the value that matches the requested
                        // setting, cache and return it.
                        for (var prop in response) {
                            var setting = response[prop];

                            if (setting.SettingInfo.Name === settingName) {
                                cachedValue = ((setting.Value === 'true' || setting.Value === true) ? true : false) || false;
                                setCachedValueAndCallback(cachedValue);
                                break;
                            }
                        }

                        // Signal data retrieval complete.
                        _L.isGettingLexusNvi = false;
                        $('body').trigger('_L.getLexusNvi.complete');
                    },
                    fail: function () {
                        cachedValue = false;
                        setCachedValueAndCallback(cachedValue);
                        _L.isGettingLexusNvi = false;
                        $('body').trigger('_L.getLexusNvi.complete');
                    }
                });
            }
        } else {
            // Call already made and finished, return the cached result.
            callback(cachedValue);
        }
    },
    getLexusJSON: function (formattedUrl) {
        var x;
        $.ajax({
            async: false,
            url: '/Services/Dealers/Lexus.asmx/GetDataWithFormattedUrl',
            success: function (data) {
                if (data.d) {
                    x = JSON.parse('{' + data.d + '}');
                } else {
                    //handle failed search
                    alert("Lexus Info URL FAIL");
                }
            },
            error: function (data) {
                console.log("error: formattedUrl");
            },
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: '{"formattedUrl":"' + formattedUrl + '"}'
        });
        return x;
        /*
		 pass a formatted URL to prepend to lexus.com/data/

		 pass nothing, [model], [model,page], [model,page,file], or [formatted custom URL path]

		 nothing : returns GlobaNav
		 [model] : returns ModelInfo
		 [model,page] & [model,page,file] : returns ModelPage
		 [formatted custom URL path] : returns custom (used on non-model Ownership pages)
		 */
    },
    getCIDs: function () {
        if (newInventoryCID != '' && newInventoryCID.toLowerCase().search('cid=') > -1) {
            _L.newCID = newInventoryCID.substr(newInventoryCID.toLowerCase().indexOf('cid='), 5);
        }
        if (preownedInventoryCID != '' && preownedInventoryCID.toLowerCase().search('cid=') > -1) {
            _L.usedCID = preownedInventoryCID.substr(preownedInventoryCID.toLowerCase().indexOf('cid='), 5);
        }
        if (certifiedInventoryCID != '' && certifiedInventoryCID.toLowerCase().search('cid=') > -1) {
            _L.certifiedCID = certifiedInventoryCID.substr(certifiedInventoryCID.toLowerCase().indexOf('cid='), 5);
        }
    },
    normalizeZip: function (x) {
        // assuming a ZIP of 5 characters, return a zip as a string so that any ZipCode requiring leading zeros keeps the zeros.
        x = x + ''; // convert integer to string
        if (x.length = 5) {
            // zip is already 5 characters long, so give it back.
            return x;
        } else {
            // add zeros until it's lenght = 5 characters and return result.
            while (x.length < 5) x = '0' + x;
            return x;
        }
    },
    tireCenterLinks: {
        //tireCenterLink : (_L.LexusSettings.TireCenterUID=='')? 'http://www.lexustirecenter.com/' : 'http://www.lexustirecenter.com/?uid='+_L.LexusSettings.TireCenterUID,
        checkLink: function (pageLink, tempLink) {
            // if there's no Lexus Tire Center ID, there's no point.
            if (_L.LexusSettings.TireCenterUID == '') return false;
            /* If this is a lexustirecenter.com link... */
            var tempLinkCompare = tempLink.toLowerCase();
            if ((_L.urlContains(tempLinkCompare, 'lexustirecenter') || _L.urlContains(tempLinkCompare, 'lexus-tire-center')) && !_L.urlContains(pageLink.attr('href'), 'lexustirecenter.com/?uid=')) {
                this.changeTirecenterLink(pageLink, tempLink);
            }
        },
        changeTirecenterLink: function (pageLink, tempLink) {
            //pageLink.attr({
            //	  'externalLink': '',
            //	  'target': '_blank',
            //	  'href': this.tireCenterLink
            //})
            //.addClass('js-LTC-link');

            var tireCenterLink = (_L.tireCenterLinks.tireCenterLink != null && _L.tireCenterLinks.tireCenterLink != '')
				? _L.tireCenterLinks.tireCenterLink
				: '#';

            /* On Mobile + Tablet, opens link in new window.  DealerTire site handles device testing. */
            if (isMobile || isTablet) {
                pageLink.attr({
                    'externalLink': '',
                    'target': '_blank',
                    'href': tireCenterLink
                });
            } else {
                /* For desktop it adds the tirecenterlink to either the li (for the menu) or just the a elsewhere */
                if (pageLink.parent('li').length == 0) {
                    pageLink
						.addClass('js-LTC-link')
						.attr({
						    'href': tireCenterLink,
						    'onclick': 'tireCenterPopUp_Call(event);'
						})
						.removeAttr('target');
                } else {
                    pageLink
						.attr({
						    'href': tireCenterLink,
						    'onclick': 'tireCenterPopUp_Call(event);'
						})
						.removeAttr('target')
						.parent('li')
						.addClass('js-LTC-link');
                }
            }
        }
    },
    pageLinkCheck: {
        linkIDs: 0,
        init: function (scope) {
            if (!window.location.origin) {
                externalLinkRun.currentLocation = window.location.protocol + "//" + window.location.host;
            } else {
                externalLinkRun.currentLocation = window.location.origin;
            }
            externalLinkRun.currentLocation = _L.removeFragmentsIfExist(externalLinkRun.currentLocation, 'http://', 'www.')

            var pageLinks = $(scope + ' a');
            for (var i = 0; i < pageLinks.length; i++) {
                /* Cache link ID so each modal has a unique number */
                this.linkIDS++

                /* Most links with a # should already been okay */
                /* Links that have already been processed get the externalLink attribute */
                if (pageLinks.eq(i).attr('href') == '#' || typeof pageLinks.eq(i).attr('externalLink') != 'undefined') {
                    continue;
                };

                /* Breaks link down to it's simplest form */
                var tempLink = (pageLinks.eq(i).attr('href') || '').split("?")[0].split("@")[0];
                /* Gets the relative link out of the url */
                var tempLink = _L.cleanUpThisUrl(tempLink);

                // link checks go here
                _L.tireCenterLinks.checkLink(pageLinks.eq(i), tempLink);
                // end link checks
            }

            // end
            $(window).trigger('external_links_finished');
            externalLinkRun.events.external_links_finished = true;

        }
    },
    urlContains: function () {
        //Checks if the list of strings passed in are part of the url returns false if any are
        var args = Array.prototype.slice.call(arguments);
        var url = args.shift();
        for (var i = 0; i < args.length; i++) {
            if (!url || url.indexOf(args[i]) == -1) {
                return false;
            };
        };
        return true;
    },
    cleanUpThisUrl: function (url) {
        return this.removeFragmentsIfExist(url.toLowerCase(), 'ftp', 'http', 's', '://', 'www.', externalLinkRun.currentLocation, '/');
    },
    removeFragmentsIfExist: function (url) {
        //Checks if the list of strings passed in are part of the url and removes them if they are
        var args = Array.prototype.slice.call(arguments);
        var url = args.shift();
        for (var i = 0, e = args.length; i < e; i++) {
            if (url.substring(0, args[i].length) == args[i]) {
                url = url.substring(args[i].length, url.length);
            };
        };
        return url;
    }
}; // end _L{}
var externalLinkRun = {
    currentLocation: '',
    events: {
        external_links_finished: false
    }
};
var GlobalNav = GlobalNav || new Object(),
	ModelInfo = new Object(),
	ModelPage = new Object(); // global variables for JSON feed from Lexus;

// get GlobalNav as it can be used in many places.
//GlobalNav = _L.getLexusInfo('globalnav');
/* commented out to reduce unnecessary webservice calls */

_L.getCIDs();

//Global call for NVI (returns true or false).
var displayInventory = '';

// functions because they're handy...
function capfirst(str) {
    str = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    return str;
}

$(function () {
    _L.tireCenterLinks.tireCenterLink = (_L.LexusSettings.TireCenterUID == '') ? 'http://www.lexustirecenter.com/' : 'http://www.lexustirecenter.com/?uid=' + _L.LexusSettings.TireCenterUID;
    _L.getLexusNvi(function (e) {
        displayInventory = e;

        $(window).trigger('gotNVI'); // nvi status retrieved
        _L.events.gotNVI = true;

        //Run external link located in external_links_reveal_modal_v2.js
        //externalLinkRun.init();
        _L.pageLinkCheck.init('body');
    }, "acceptedNewInventoryTermsAndConditions");



    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.js-backTop').fadeIn();
        } else {
            $('.js-backTop').fadeOut();
        }
    });
    // Scroll to top when anchor points to #top
    $('.js-backTop').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
        return false; // Keep anchor from appearing in URL
    });

    //Check to see if the window is bottom if not display button
    $(window).scroll(function () {
        if ($(this).scrollTop() < 2000) {
            $('.js-scrollDown').fadeIn();
        } else {
            $('.js-scrollDown').fadeOut();
        }
    });
});