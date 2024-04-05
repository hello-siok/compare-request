//var data = data || {};

function getJason(data, imp){
  var jason = [
    {
      "parent": "BidRequest",
      "attribute": "tmax",
      "Required": 1,
      "Visibility": 1,
      "id": "0BidRequest_tmax",
      "location": data?.['tmax'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bcat",
      "Required": 0,
      "Visibility": 1,
      "id": "0BidRequest_bcat",
      "location": data?.['bcat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "badv",
      "Required": 0,
      "Visibility": 1,
      "id": "0BidRequest_badv",
      "location": data?.['badv'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bapp",
      "Required": 0,
      "Visibility": 0,
      "id": "0BidRequest_bapp",
      "location": data?.['bapp'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wlang",
      "Required": 0,
      "Visibility": 1,
      "id": "0BidRequest_wlang",
      "location": data?.['wlang'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wlangb",
      "Required": 0,
      "Visibility": 0,
      "id": "0BidRequest_wlangb",
      "location": data?.['wlangb'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wseat",
      "Required": 0,
      "Visibility": 0,
      "id": "0BidRequest_wseat",
      "location": data?.['wseat '] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bseat",
      "Required": 0,
      "Visibility": 0,
      "id": "0BidRequest_bseat",
      "location": data?.['bseat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "cur",
      "Required": 0,
      "Visibility": 0,
      "id": "0BidRequest_cur",
      "location": data?.['cur'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "0BidRequest_ext",
      "location": data?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "id": "0BidRequest_cattax",
      "location": data?.['cattax'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "tagid",
      "Required": 1,
      "Visibility": 1,
      "id": "Imp_tagid",
      "location": imp?.['tagid'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "bidfloor",
      "Required": 1,
      "Visibility": 1,
      "id": "Imp_bidfloor",
      "location": imp?.['bidfloor'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "bidfloorcur",
      "Required": 1,
      "Visibility": 1,
      "id": "Imp_bidfloorcur",
      "location": imp?.['bidfloorcur'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "metric",
      "Required": 0,
      "Visibility": 1,
      "id": "Imp_metric",
      "location": imp?.['metric'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "pmp",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_pmp",
      "location": imp?.['pmp'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "displaymanager",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_displaymanager",
      "location": imp?.['displaymanager'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "displaymanagerver",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_displaymanagerver",
      "location": imp?.['displaymanagerver'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "instl",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_instl",
      "location": imp?.['instl'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "clickbrowser",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_clickbrowser",
      "location": imp?.['clickbrowser'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "secure",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_secure",
      "location": imp?.['secure'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "iframebuster",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_iframebuster",
      "location": imp?.['iframebuster'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "exp",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_exp",
      "location": imp?.['exp'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "Imp_ext",
      "location": imp?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "cat",
      "Required": 1,
      "Visibility": 1,
      "id": "Site_cat",
      "location": data?.['site']?.['cat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "domain",
      "Required": 1,
      "Visibility": 1,
      "id": "Site_domain",
      "location": data?.['site']?.['domain'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "name",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_name",
      "location": data?.['site']?.['name'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "sectioncat",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_sectioncat",
      "location": data?.['site']?.['sectioncat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "pagecat",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_pagecat",
      "location": data?.['site']?.['pagecat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "page",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_page",
      "location": data?.['site']?.['page'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "ref",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_ref",
      "location": data?.['site']?.['ref'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "search",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_search",
      "location": data?.['site']?.['search'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "mobile",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_mobile",
      "location": data?.['site']?.['mobile'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "privacypolicy",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_privacypolicy",
      "location": data?.['site']?.['privacypolicy'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "publisher",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_publisher",
      "location": data?.['site']?.['publisher'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_keywords",
      "location": data?.['site']?.['keywords'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Site",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "Site_ext",
      "location": data?.['site']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "cat",
      "Required": 1,
      "Visibility": 1,
      "id": "App_cat",
      "location": data?.['app']?.['cat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "domain",
      "Required": 0,
      "Visibility": 1,
      "id": "App_domain",
      "location": data?.['app']?.['domain'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "storeurl",
      "Required": 1,
      "Visibility": 1,
      "id": "App_storeurl",
      "location": data?.['app']?.['storeurl'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "ver",
      "Required": 0,
      "Visibility": 1,
      "id": "App_ver",
      "location": data?.['app']?.['ver'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "bundle",
      "Required": 0,
      "Visibility": 1,
      "id": "App_bundle",
      "location": data?.['app']?.['bundle'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "kwarray",
      "Required": 0,
      "Visibility": 1,
      "id": "App_kwarray",
      "location": data?.['app']?.['kwarray'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "id": "App_cattax",
      "location": data?.['app']?.['cattax'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "App_ext",
      "location": data?.['app']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "name",
      "Required": 0,
      "Visibility": 0,
      "id": "App_name",
      "location": data?.['app']?.['name'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "sectioncat",
      "Required": 0,
      "Visibility": 0,
      "id": "App_sectioncat",
      "location": data?.['app']?.['sectioncat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "pagecat",
      "Required": 0,
      "Visibility": 0,
      "id": "App_pagecat",
      "location": data?.['app']?.['pagecat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "privacypolicy",
      "Required": 0,
      "Visibility": 0,
      "id": "App_privacypolicy",
      "location": data?.['app']?.['privacypolicy'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "paid",
      "Required": 0,
      "Visibility": 0,
      "id": "App_paid",
      "location": data?.['app']?.['paid'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "publisher",
      "Required": 0,
      "Visibility": 0,
      "id": "App_publisher",
      "location": data?.['app']?.['publisher'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "App",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "id": "App_keywords",
      "location": data?.['app']?.['keywords'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ifa",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_ifa",
      "location": data?.['device']?.['ifa'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ua",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_ua",
      "location": data?.['device']?.['ua'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "sua",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_sua",
      "location": data?.['device']?.['sua'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dnt",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_dnt",
      "location": data?.['device']?.['dnt'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "lmt",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_lmt",
      "location": data?.['device']?.['lmt'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ip",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_ip",
      "location": data?.['device']?.['ip'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ipv6",
      "Required": 0,
      "Visibility": 0,
      "id": "Device_ipv6",
      "location": data?.['device']?.['ipv6'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "mccmnc",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_mccmnc",
      "location": data?.['device']?.['mccmnc'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "type",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_type",
      "location": data?.['device']?.['type'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "model",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_model",
      "location": data?.['device']?.['model'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "make",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_make",
      "location": data?.['device']?.['make'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "os",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_os",
      "location": data?.['device']?.['os'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "osv",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_osv",
      "location": data?.['device']?.['osv'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "hwv",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_hwv",
      "location": data?.['device']?.['hwv'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "connectiontype",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_connectiontype",
      "location": data?.['device']?.['connectiontype'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "w",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_w",
      "location": data?.['device']?.['w'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "h",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_h",
      "location": data?.['device']?.['h'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "language",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_language",
      "location": data?.['device']?.['language'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "langb",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_langb",
      "location": data?.['device']?.['langb'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "js",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_js",
      "location": data?.['device']?.['js'] ?? null,
      "RecommendedValue": 1
    },
    {
      "parent": "Device",
      "attribute": "devicetype",
      "Required": 1,
      "Visibility": 1,
      "id": "Device_devicetype",
      "location": data?.['device']?.['devicetype'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "didsha1",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_didsha1",
      "location": data?.['device']?.['didsha1'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "didmd5",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_didmd5",
      "location": data?.['device']?.['didmd5'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dpidsha1",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_dpidsha1",
      "location": data?.['device']?.['dpidsha1'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dpidmd5",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_dpidmd5",
      "location": data?.['device']?.['dpidmd5'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "macsha1",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_macsha1",
      "location": data?.['device']?.['macsha1'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "macmd5",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_macmd5",
      "location": data?.['device']?.['macmd5'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "Device_ext",
      "location": data?.['device']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ppi",
      "Required": 0,
      "Visibility": 0,
      "id": "Device_ppi",
      "location": data?.['device']?.['ppi'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "pxratio",
      "Required": 0,
      "Visibility": 0,
      "id": "Device_pxratio",
      "location": data?.['device']?.['pxratio'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "geofetch",
      "Required": 0,
      "Visibility": 0,
      "id": "Device_geofetch",
      "location": data?.['device']?.['geofetch'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "flashver",
      "Required": 0,
      "Visibility": 0,
      "id": "Device_flashver",
      "location": data?.['device']?.['flashver'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "carrier",
      "Required": 0,
      "Visibility": 0,
      "id": "Device_carrier",
      "location": data?.['device']?.['carrier'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "country",
      "Required": 1,
      "Visibility": 1,
      "id": "Geo_country",
      "location": data?.['device']?.['geo']?.['country'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lat",
      "Required": 1,
      "Visibility": 1,
      "id": "Geo_lat",
      "location": data?.['device']?.['geo']?.['lat'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lon",
      "Required": 1,
      "Visibility": 1,
      "id": "Geo_lon",
      "location": data?.['device']?.['geo']?.['lon'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "ipservice",
      "Required": 1,
      "Visibility": 1,
      "id": "Geo_ipservice",
      "location": data?.['device']?.['geo']?.['ipservice'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "type",
      "Required": 0,
      "Visibility": 1,
      "id": "Geo_type",
      "location": data?.['device']?.['geo']?.['type'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "accuracy",
      "Required": 0,
      "Visibility": 1,
      "id": "Geo_accuracy",
      "location": data?.['device']?.['geo']?.['accuracy'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lastfix",
      "Required": 0,
      "Visibility": 1,
      "id": "Geo_lastfix",
      "location": data?.['device']?.['geo']?.['lastfix'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "region",
      "Required": 0,
      "Visibility": 1,
      "id": "Geo_region",
      "location": data?.['device']?.['geo']?.['region'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "regionfips104",
      "Required": 0,
      "Visibility": 0,
      "id": "Geo_regionfips104",
      "location": data?.['device']?.['geo']?.['regionfips104'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "metro",
      "Required": 0,
      "Visibility": 1,
      "id": "Geo_metro",
      "location": data?.['device']?.['geo']?.['metro'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "city",
      "Required": 0,
      "Visibility": 1,
      "id": "Geo_city",
      "location": data?.['device']?.['geo']?.['city'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "zip",
      "Required": 0,
      "Visibility": 1,
      "id": "Geo_zip",
      "location": data?.['device']?.['geo']?.['zip'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "utcoffset",
      "Required": 0,
      "Visibility": 0,
      "id": "Geo_utcoffset",
      "location": data?.['device']?.['geo']?.['utcoffset'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "Geo_ext",
      "location": data?.['device']?.['geo']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "mimes",
      "Required": 1,
      "Visibility": 1,
      "id": "Video_mimes",
      "location": imp?.['video']?.['mimes'] ?? null,
      "RecommendedValue": ["video/mp4","application/x-mpegurl","video/3gpp","video/x-flv"]
    },
    {
      "parent": "Video",
      "attribute": "minduration",
      "Required": 0,
      "Visibility": 1,
      "id": "Video_minduration",
      "location": imp?.['video']?.['minduration'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxduration",
      "Required": 1,
      "Visibility": 1,
      "id": "Video_maxduration",
      "location": imp?.['video']?.['maxduration'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "protocol",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_protocol",
      "location": imp?.['video']?.['protocol'] ?? null,
      "RecommendedValue": [2,3,5,6]
    },
    {
      "parent": "Video",
      "attribute": "protocols",
      "Required": 1,
      "Visibility": 1,
      "id": "Video_protocols",
      "location": imp?.['video']?.['protocols'] ?? null,
      "RecommendedValue": [2,3,5,6]
    },
    {
      "parent": "Video",
      "attribute": "w",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_w",
      "location": imp?.['video']?.['w'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "h",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_h",
      "location": imp?.['video']?.['h'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "startdelay",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_startdelay",
      "location": imp?.['video']?.['startdelay'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "placement",
      "Required": 1,
      "Visibility": 1,
      "id": "Video_placement",
      "location": imp?.['video']?.['placement'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "linearity",
      "Required": 1,
      "Visibility": 1,
      "id": "Video_linearity",
      "location": imp?.['video']?.['linearity'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skip",
      "Required": 0,
      "Visibility": 1,
      "id": "Video_skip",
      "location": imp?.['video']?.['skip'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skipmin",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_skipmin",
      "location": imp?.['video']?.['skipmin'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skipafter",
      "Required": 0,
      "Visibility": 1,
      "id": "Video_skipafter",
      "location": imp?.['video']?.['skipafter'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "sequence",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_sequence",
      "location": imp?.['video']?.['sequence'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_battr",
      "location": imp?.['video']?.['battr'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxextended",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_maxextended",
      "location": imp?.['video']?.['maxextended'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "minbitrate",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_minbitrate",
      "location": imp?.['video']?.['minbitrate'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxbitrate",
      "Required": 1,
      "Visibility": 1,
      "id": "Video_maxbitrate",
      "location": imp?.['video']?.['maxbitrate'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "boxingallowed",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_boxingallowed",
      "location": imp?.['video']?.['boxingallowed'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "playbackmethod",
      "Required": 1,
      "Visibility": 1,
      "id": "Video_playbackmethod",
      "location": imp?.['video']?.['playbackmethod'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "playbackend",
      "Required": 0,
      "Visibility": 1,
      "id": "Video_playbackend",
      "location": imp?.['video']?.['playbackend'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "delivery",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_delivery",
      "location": imp?.['video']?.['delivery'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "pos",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_pos",
      "location": imp?.['video']?.['pos'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "companionad",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_companionad",
      "location": imp?.['video']?.['companionad'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_api",
      "location": imp?.['video']?.['api'] ?? null,
      "RecommendedValue": [3,5,6,7]
    },
    {
      "parent": "Video",
      "attribute": "companiontype",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_companiontype",
      "location": imp?.['video']?.['companiontype'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "Video_ext",
      "location": imp?.['video']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "format",
      "Required": 0,
      "Visibility": 0,
      "id": "Banner_format",
      "location": imp?.['banner']?.['format'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "w",
      "Required": 0,
      "Visibility": 0,
      "id": "Banner_w",
      "location": imp?.['banner']?.['w'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "h",
      "Required": 0,
      "Visibility": 0,
      "id": "Banner_h",
      "location": imp?.['banner']?.['h'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "btype",
      "Required": 0,
      "Visibility": 0,
      "id": "Banner_btype",
      "location": imp?.['banner']?.['btype'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "id": "Banner_battr",
      "location": imp?.['banner']?.['battr'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "pos",
      "Required": 1,
      "Visibility": 1,
      "id": "Banner_pos",
      "location": imp?.['banner']?.['pos'] ?? null,
      "RecommendedValue": 7
    },
    {
      "parent": "Banner",
      "attribute": "mimes",
      "Required": 1,
      "Visibility": 1,
      "id": "Banner_mimes",
      "location": imp?.['banner']?.['mimes'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "topframe",
      "Required": 1,
      "Visibility": 1,
      "id": "Banner_topframe",
      "location": imp?.['banner']?.['topframe'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "expdir",
      "Required": 0,
      "Visibility": 0,
      "id": "Banner_expdir",
      "location": imp?.['banner']?.['expdir'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "api",
      "Required": 1,
      "Visibility": 1,
      "id": "Banner_api",
      "location": imp?.['banner']?.['api'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "Banner_ext",
      "location": imp?.['banner']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "vcm",
      "Required": 0,
      "Visibility": 1,
      "id": "Banner_vcm",
      "location": imp?.['banner']?.['vcm'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "request",
      "Required": 1,
      "Visibility": 1,
      "id": "Native_request",
      "location": imp?.['native']?.['request'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "ver",
      "Required": 1,
      "Visibility": 1,
      "id": "Native_ver",
      "location": imp?.['native']?.['ver'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "id": "Native_api",
      "location": imp?.['native']?.['api'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "id": "Native_battr",
      "location": imp?.['native']?.['battr'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "ext",
      "Required": 1,
      "Visibility": 1,
      "id": "Native_ext",
      "location": imp?.['native']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "privacy",
      "Required": 1,
      "Visibility": 1,
      "id": "Native_privacy",
      "location": imp?.['native']?.['request'] != undefined ? (JSON.parse(imp?.['native']?.['request'])?.['privacy'] ?? null) : null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "plcmttype",
      "Required": 1,
      "Visibility": 1,
      "id": "Native_plcmttype",
      "location": imp?.['native']?.['request'] != undefined ? (JSON.parse(imp?.['native']?.['request'])?.['plcmttype'] ?? null) : null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "eventtrackers",
      "Required": 1,
      "Visibility": 1,
      "id": "Native_eventtrackers",
      "location": imp?.['native']?.['request'] != undefined ? (JSON.parse(imp?.['native']?.['request'])?.['eventtrackers'] ?? null) : null,
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "context",
      "Required": 1,
      "Visibility": 1,
      "id": "Native_context",
      "location": imp?.['native']?.['request'] != undefined ? (JSON.parse(imp?.['native']?.['request'])?.['context'] ?? null) : null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "mimes",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_mimes",
      "location": imp?.['audio']?.['mimes'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "minduration",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_minduration",
      "location": imp?.['audio']?.['minduration'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxduration",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_maxduration",
      "location": imp?.['audio']?.['maxduration'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "protocols",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_protocols",
      "location": imp?.['audio']?.['protocols'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "startdelay",
      "Required": 0,
      "Visibility": 1,
      "id": "Audio_startdelay",
      "location": imp?.['audio']?.['startdelay'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "sequence",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_sequence",
      "location": imp?.['audio']?.['sequence'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_battr",
      "location": imp?.['audio']?.['battr'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxextended",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_maxextended",
      "location": imp?.['audio']?.['maxextended'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "minbitrate",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_minbitrate",
      "location": imp?.['audio']?.['minbitrate'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxbitrate",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_maxbitrate",
      "location": imp?.['audio']?.['maxbitrate'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "delivery",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_delivery",
      "location": imp?.['audio']?.['delivery'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "companionad",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_companionad",
      "location": imp?.['audio']?.['companionad'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_api",
      "location": imp?.['audio']?.['api'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "companiontype",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_companiontype",
      "location": imp?.['audio']?.['companiontype'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxseq",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_maxseq",
      "location": imp?.['audio']?.['maxseq'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "feed",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_feed",
      "location": imp?.['audio']?.['feed'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "stitched",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_stitched",
      "location": imp?.['audio']?.['stitched'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "nvol",
      "Required": 0,
      "Visibility": 0,
      "id": "Audio_nvol",
      "location": imp?.['audio']?.['nvol'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "Audio_ext",
      "location": imp?.['audio']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "poddur",
      "Required": 0,
      "Visibility": 1,
      "id": "Audio_poddur",
      "location": imp?.['audio']?.['poddur'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "rqddurs",
      "Required": 0,
      "Visibility": 1,
      "id": "Audio_rqddurs",
      "location": imp?.['audio']?.['rqddurs'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "podid",
      "Required": 0,
      "Visibility": 1,
      "id": "Audio_podid",
      "location": imp?.['audio']?.['podid'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "podseq",
      "Required": 0,
      "Visibility": 1,
      "id": "Audio_podseq",
      "location": imp?.['audio']?.['podseq'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "slotinpod",
      "Required": 0,
      "Visibility": 1,
      "id": "Audio_slotinpod",
      "location": imp?.['audio']?.['slotinpod'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "mincpmpersec",
      "Required": 0,
      "Visibility": 1,
      "id": "Audio_mincpmpersec",
      "location": imp?.['audio']?.['mincpmpersec'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "id",
      "Required": 0,
      "Visibility": 1,
      "id": "User_id",
      "location": data?.['user']?.['id'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "buyeruid",
      "Required": 0,
      "Visibility": 1,
      "id": "User_buyeruid",
      "location": data?.['user']?.['buyeruid'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "yob",
      "Required": 0,
      "Visibility": 1,
      "id": "User_yob",
      "location": data?.['user']?.['yob'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "gender",
      "Required": 0,
      "Visibility": 1,
      "id": "User_gender",
      "location": data?.['user']?.['gender'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "consent",
      "Required": 1,
      "Visibility": 1,
      "id": "User_consent",
      "location": data?.['user']?.['consent'] ?? (data?.['user']?.['ext']?.['consent'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "id": "User_keywords",
      "location": data?.['user']?.['keywords'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "customdata",
      "Required": 0,
      "Visibility": 0,
      "id": "User_customdata",
      "location": data?.['user']?.['customdata'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "geo",
      "Required": 0,
      "Visibility": 0,
      "id": "User_geo",
      "location": data?.['user']?.['geo'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "data",
      "Required": 0,
      "Visibility": 0,
      "id": "User_data",
      "location": data?.['user']?.['data'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "ext.eids",
      "Required": 1,
      "Visibility": 1,
      "id": "User_ext-eids",
      "location": data?.['user']?.['ext']?.['eids'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "fd",
      "Required": 0,
      "Visibility": 0,
      "id": "Source_fd",
      "location": data?.['source']?.['fd'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "tid",
      "Required": 0,
      "Visibility": 0,
      "id": "Source_tid",
      "location": data?.['source']?.['tid'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "pchain",
      "Required": 1,
      "Visibility": 1,
      "id": "Source_pchain",
      "location": data?.['source']?.['pchain'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "omidpn",
      "Required": 1,
      "Visibility": 1,
      "id": "Source_omidpn",
      "location": data?.['source']?.['ext']?.['omidpn'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "gdpr",
      "Required": 1,
      "Visibility": 1,
      "id": "Regs_gdpr",
      "location": data?.['regs']?.['ext']?.['gdpr'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "coppa",
      "Required": 1,
      "Visibility": 1,
      "id": "Regs_coppa",
      "location": data?.['regs']?.['coppa'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "us_privacy (only for US traffic)",
      "Required": 1,
      "Visibility": 1,
      "id": "Regs_us_privacy",
      "location": data?.['regs']?.['ext']?.['us_privacy'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "Regs_ext",
      "location": data?.['regs']?.['ext'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "id",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_id",
      "location": data?.['site']?.['id'] ?? (data?.['app']?.['id'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "artist",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_artist",
      "location": data?.['site']?.['artist'] ?? (data?.['app']?.['artist'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "album",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_album",
      "location": data?.['site']?.['album'] ?? (data?.['app']?.['album'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "episode",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_episode",
      "location": data?.['site']?.['episode'] ?? (data?.['app']?.['episode'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "genre",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_genre",
      "location": data?.['site']?.['genre'] ?? (data?.['app']?.['genre'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "isrc",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_isrc",
      "location": data?.['site']?.['isrc'] ?? (data?.['app']?.['isrc'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "producer",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_producer",
      "location": data?.['site']?.['producer'] ?? (data?.['app']?.['producer'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "url",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_url",
      "location": data?.['site']?.['url'] ?? (data?.['app']?.['url'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "cat",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_cat",
      "location": data?.['site']?.['cat'] ?? (data?.['app']?.['cat'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_cattax",
      "location": data?.['site']?.['cattax'] ?? (data?.['app']?.['cattax'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "context",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_context",
      "location": data?.['site']?.['context'] ?? (data?.['app']?.['context'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "contentrating",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_contentrating",
      "location": data?.['site']?.['contentrating'] ?? (data?.['app']?.['contentrating'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "data",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_data",
      "location": data?.['site']?.['data'] ?? (data?.['app']?.['data'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "embeddable",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_embeddable",
      "location": data?.['site']?.['embeddable'] ?? (data?.['app']?.['embeddable'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_keywords",
      "location": data?.['site']?.['keywords'] ?? (data?.['app']?.['keywords'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "len",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_len",
      "location": data?.['site']?.['len'] ?? (data?.['app']?.['len'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "language",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_language",
      "location": data?.['site']?.['language'] ?? (data?.['app']?.['language'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "livestream",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_livestream",
      "location": data?.['site']?.['livestream'] ?? (data?.['app']?.['livestream'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "prodq",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_prodq",
      "location": data?.['site']?.['prodq'] ?? (data?.['app']?.['prodq'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "videoquality",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_videoquality",
      "location": data?.['site']?.['videoquality'] ?? (data?.['app']?.['videoquality'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "userrating",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_userrating",
      "location": data?.['site']?.['userrating'] ?? (data?.['app']?.['userrating'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "qagmediarating",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_qagmediarating",
      "location": data?.['site']?.['qagmediarating'] ?? (data?.['app']?.['qagmediarating'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "sourcerelationship",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_sourcerelationship",
      "location": data?.['site']?.['sourcerelationship'] ?? (data?.['app']?.['sourcerelationship'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_ext",
      "location": data?.['site']?.['ext'] ?? (data?.['app']?.['ext'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "kwarray",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_kwarray",
      "location": data?.['site']?.['kwarray'] ?? (data?.['app']?.['kwarray'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "network",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_network",
      "location": data?.['site']?.['network'] ?? (data?.['app']?.['network'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "channel",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_channel",
      "location": data?.['site']?.['channel'] ?? (data?.['app']?.['channel'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "langb",
      "Required": 0,
      "Visibility": 1,
      "id": "Content_langb",
      "location": data?.['site']?.['langb'] ?? (data?.['app']?.['langb'] ?? null),
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "brand",
      "Required": 0,
      "Visibility": 1,
      "id": "BrandVersion_brand",
      "location": data?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['brand'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "version",
      "Required": 0,
      "Visibility": 1,
      "id": "BrandVersion_version",
      "location": data?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['version'] ?? null,
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "BrandVersion_ext",
      "location": data?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['ext'] ?? null,
      "RecommendedValue": ""
    }
  ];

  return jason;
}

