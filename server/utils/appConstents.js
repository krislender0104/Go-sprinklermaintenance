const config = {
  PORT: 3000,

  // site apis 
  SITE_SITES_DETAIL : "/site/:id",//Test
  SITE_SITES_MAIL_DETAIL: "/site/sitemail/:id",//Test
  SITE_SITES_HAZRDS_LIST : "/site/sitehazards/:id", //Test
  SITE_SITES_HAZRDS__TEST_LIST : "/site/sitehazardstests/:siteid/:hazid", //Test
  SITE_SITES_TREE_LIST : "/site/sitesTree/:id",
  SITE_SITES_UPDATE_GET : "/site/siteupdateget/:id",//Test
  SITE_SITES_MAIL_UPDATE_GET: "/site/siteemailupdateget/:id",//Test
  SITE_FILTER_SITE:"/site/filtersite/:id", //Test
  SITE_FILTER_SITEHAZARDS_POST:"/site/filtersitehazards", //Test
  SITE_FILTER_SITEHAZARDTESTS_POST:"/site/filtersitehazardtests", //Test
  SITE_SEARCH_SITE:"/site/sitesearch/:id",//Test
  SITE_AUTHENTICATE_USER:"/site/authenticate/webuser",//Test
  SITE_AUTHENTICATE_ADMINUSER:"/site/authenticate/:id",
  SITE_SITES_CREATE_POST : "/site/sitecreate",//Test
  SITE_TEST_DELETE : "/test/deletetest/:id",
  SITE_AUTHENTICATE_EMAIL: "/site/authenticateemail",
  SITE_AUTHENTICATE_TOKEN: "/site/authenticatetoken",
  SITE_SITES_MAIL_NEW: "/site/siteemailnew/:id",//Test
  SITE_FILTERED_LIST_POST: "/site/filteredSiteList",//Test
  SITE_ADDRESS_SEARCH: "/site/searchaddress",
  GET_DYNAMIC_DATA:"/SITES/DYNAMICUPDATE/:updatetable/:updatestring/:conditionstring",
  SITE_SITES_DELETE:"/site/sitedelete/:id",
  SITE_MAIL_ADDRESS_DELETE:"/site/maildelete/:id",
  SITE_MOVEDATASET:"/site/movedataset",
  SITE_CREATEDATASET:"/site/createdataset",
  SITE_EXCEL_IMPORT:"/site/siteimport",
  HAZARD_EXCEL_IMPORT:"/site/hazardimport",
  SITE_MOVEGROUPDATASET:"/sites/groupdatasetupdate/:cond/:table/:dataset",
  

  // company apis
  COMPANY_DATA_SET_LIST : "/company/dataset", //Test
  GET_COMPANY_USER_DATA_SET_LIST : "/company/dataset/:id/:is_accessAll",
  COMPANYUSERS_DATA_SET_LIST : "/company/userdataset", 
  COMPANY_TESTER:"/company/companybytester/:id",
  COMPANY_ALL_TESTER:"/company/testersname",
  
  // technicican apis 
  TECHNICIAN_LIST : "/technician/",//Test
  TECHNICIANDEV_TYPE : "/technician/devtypes",//Test
  TESTKIT_LIST : "/technician/testkit",//Test
  TECHNICIAN_COMPANY_LIST : "/technician/companies",//Test
  TECHNICIAN_FAILTYPE_LIST:"/technician/failtypes",
  TECHNICIAN_REPAIRTYPE_LIST:"/technician/repairtypes",

  TECHNICIAN_FAILTYPE_CREATE:"/technician/createfailtype",
  TECHNICIAN_REPAIRTYPE_CREATE:"/technician/createrepairtype",
  TECHNICIAN__DEV_CREATE_POST : "/technician/devtypecreate",
  TECHNICIAN_DEV_TYPE_CREATE_POST: "/technician/devtypes_create_post_1",
  TECHNICIAN_TESTKIT_CREATE: "/technician/testkitcreate",
  TECHNICIAN_CREATE_POST : "/technician/technicianscreate",
  TECHNICIAN_COMPANY_CREATE: "/technician/companiescreate",

  TECHNICIAN_FAILTYPE_UPDATE:"/technician/updatefailtype",
  TECHNICIAN_COMPANY_UPDATE: "/technician/companiesupdate",
  TECHNICIAN_DEV_TYPE_UPDATE_POST: "/technician/devtypeupdate/:id",
  TECHNICIAN_UPDATE_POST: "/technician/techniciansupdate/:id",
  TECHNICIAN_REPAIRTYPE_UPDATE:"/technician/updaterepairtype",
  TECHNICIAN_TESTKIT_UPDATE: "/technician/testkitupdate",


  TECHNICIAN_DEVTYPE_DETAIL : "/technician/devtype/:id",//Test
  TECHNICIAN_COMPANY_DETAIL : "/technician/Company/:id",//
  TECHNICIAN_TECHNICIAN_DETAIL : "/Technician/technician/:id",//
  TECHNICIAN_TESTKIT_DETAIL : "/technician/testkit/:id",//


  TECHNICIAN_DELETE_POST : "/technicians_delete_post",
  TECHNICIAN_DELETE_TESTKIT : "/technician/testkitdelete/:id",
  TECHNICIAN_DELETE_DEVTYPE : "/technician/devtypedelete/:id",
  TECHNICIAN_DELETE_TECHNICIAN : "/technician/techniciandelete/:id",
  TECHNICIAN_DELETE_COMPANY : "/technician/companydelete/:id",
  TECHNICIAN_DELETE_FAILTYPE : "/technician/deletefailtype/:id",

  TECHNICAN_CHANGEPASSWORD:"/technician/changepassword",

  // hazard apis
  HAZARD_DETAILS: "/hazard/:id",//Test
  HAZARD_UPDATE: "/hazard/hazardupdate/:id",//Test
  HAZARD_CREATE: "/hazard/hazardcreate",//Test
  HAZARD_DELETE: "/hazard/deletehazard/:id",

  // test apis
  TEST_DETAILS: "/test/:id",//Test
  TEST_UPDATE: "/test/testupdate/:id",//Test
  TEST_CREATE: "/test/testcreate",//Test
  TEST_SITE_CREATE:"/test/createsitetest",

  SITE_EMAIL : "/email/:id",//Test

  SETTINGS_TABLES_LIST:"/settings/tableslist",
  SETTINGS_TABLEFIELDS_SEARCH:"/settings/searchfields",
  SETTINGS_TABLEFIELDS_LIST:"/settings/tablefieldslist",
  SETTINGS_TABLEFIELDS_UPDATE:"/settings/fieldsupdate",
  SETTINGS_FIELDS_BYTABLENAME:"/settings/getfields/:tablename",
  SETTINGS_MAILMERGE_LIST:"/setting/getmailmerge",
  SETTINGS_MAILMERGE_GETBYID:"/setting/getmailmergebyid/:Ncode",
  SETTINGS_MAILMERGE_CREATE:"/setting/mailmergeadd",
  SETTINGS_MAILMERGE_UPDATEBYID:"/seting/mailmergeupdate",
  SETTINGS_MAILMERGE_DELETE:"/setting/deletemailmerge/:Ncode",
  //--------------------------------------------------------------------

  // user apis
  USER_LIST: "/users/user_list",
  ROLE_LIST: "/users/role_list",
  USER_DELETE_LIST: "/users/user_delete_post",
  USER_CREATE_POST:"/users/usercreate",
  USER_ADMINPRIVILAGES: "/users/adminprivilages/:id",
  USER_DATAPRIVILAGES: "/users/dataprivilages/:id",
  USER_UPDATE_POST:"/users/userUpdate",
  USER_ADMIN_ACCESS : "/users/userdatasetaccess/:id", //Test
  USER_TESTER_GET : "/users/gettester/:id", //Test
  USER_PASSWORD_UPDATE: "/users/updatepassword",
  USER_DELETE_MULTIPLE: "/users/deleteusers",
  
  //reports api
  REPORTS_EXPORT_LIST: "/reports/exports_list",
  REPORTS_EXPORT_REPORT:"/reports/exports_report",
  REPORTS_TABLEFIELDS_SEARCH:"/reports/filterreportexports/:id",
  REPORTS_TABLEFIELDS_EDIT_SEARCH:"/reports/filterreporteditexportsByTable/:tablename",
  REPORTS_EXPORT_EDIT_BYID:"/reports/filterreporteditexportsById/:id",
  REPORTS_EXPORT_GET_CONDITION_BYID:"/reports/filterreporteditexportsconditionById/:id",
  REPORTS_EXPORT_CREATE:"/reports/Createexport",
  REPORTS_EXPORT_UPDATE:"/reports/updateexport/:id",
  REPORTS_EXPORT_DELETE:"/report/deleteexport/:id",
  EXPORT_TABLE:"/report/export/:id",
  DATE_DETAILS:"/date/details",
  GET_MONTH_COUNT:"/reports/getDayEvent/:userid",
  GET_DAY_COUNT:"/reports/getColumnCount",

  //Web Tests
  WEBTEST_APPOINTMENTS_INSTALLATION_LIST:"/webtest/installappointments/:installdate",
  WEBTEST_APPOINTMENTS_TEST_LIST:"/webtest/testappointments/:testdue",
  WEBTEST_APPOINTMENTS_TESTERS_LIST:"/webtest/appointments/testlist/:appointmenttype",
  WEBTEST_APPOINTMENTS_CREATE_POST:"/webtest/createappointments",
  WEBTEST_APPOINTMENTS_ASSIGNED_LIST:"/webtests/assignedappointments/:id",
  WEBTEST_SETUP_LIST:"/webtests/webtestsetup/",
  WEBTEST_SETUP_UPDATE_POST:"/webtests/updatewebtestsetup",
  WEBTEST_SETUP_CREATE_POST:"/webtests/webtestsetupcreate",
  WEBTEST_REVIEW_LIST: "/webtests/webtestreview",
  WEBTEST_REVIEW_UPDATE: "/webtests/updatewebtestreview",
  WEBTEST_REVIEW_HISTORY_DELETE:"/webtests/deletewebtestreview/:id",
  WEBTEST_REVIEW_DELETE:"/webtest/deletewebtesthistory",
  WEBTEST_TESTENTRY_GETTESTKIT:"/webtest/testkitbytester/:id", //companyid

  SEARCH_TESTER:"/webtest/searchtester/:searchtext",
  
  WEBTEST_SUBMITEST_POST:"/webtest/submittest",
  WEBTEST_HAZARD_HISTORY_LIST:"/webtest/webtesthazardhistorylist",
  WEBTEST_FULLNAMEBYID:"/webtest/fullnamebyid/:id",
  

  // violations apis
  VIOLATIONS_LIST: "/violations/violatons_list",
  VIOLATIONS_LIST_DELETE: "/violations/violatons_delete_post",

  // device history
  DEVICE_HISTORY_LIST: "/devicehistory/deviceHistory_list",
  DEVICE_HISTORY_DELETE: "/devicehistory/deviceHistory_list",
  
  // history
  HISTORY_LIST: "/history/history_list",
  HISTORY_DELETE: "/history/history_delete_post",
  
  // sitenode apis 
  SITE_NOTE_LIST : "/sitenotes/siteNotes_list",
  SITE_NOTE_DELETE_POST : "/sitenotes/siteNotes_delete_post",
  
  // sitenode apis 
  SURVEYS_LIST : "/surveys/surveys_delete_post",
  SURVEYS_LIST_DELETE_POST : "/surveys/surveys_delete_post",

  COMPANY_TESTER:"/company/companybytester/:id",
  GET_SITE_HAZARD:"/sitehazard/getsitehazard",
  HAZARD_HISTORY_CREATE:"/hazard/createhazardhistory",
  HAZARD_UPDATE_FROM_TESTVERIFY:"/hazard/updatehazardfromtestverify",
  HAZARD_VERIFY_SITE:"/hazard/getsitedetails/:hazid",
  CREATE_WEBTESTHISTORY:"/webtest/createwebtesthistory",
  EDIT_WEBTESTHISTORY:"/webtest/editwebtesthistory",
  GET_WEBTESTHISTORY:"/webtest/getwebtesthistory/:code",
  GET_HAZARDHISTORYDETAILSDATA:"/hazard/hazardhistorydetailsdata/:id",
  UPDATE_HAZARDHISTORYDETAILS:"/hazard/updatehazardhistorydetails",
  GET_SUBMITTEDWEBTESTHISTORY:"/webtest/SubmittedWebTestHistory/:code",
  GET_SUBMITTEDWEBTESTHISTORY_FROM_ADMIN:"/webtest/SubmittedWebTestHistory",
  SUBMIT_TEST_FROM_ADMIN:"/webtest/submittestfromadmin",
  

  GET_DATASET:"/siteinformation/getdataset",
  //GET_SITEHAZARD_Details:"/siteinformation/getsitehazarddetails/:clientid/:accountnum",
  GET_SITEHAZARD_Details:"/siteinformation/getsitehazarddetails",
  GET_DEVTEST:"/siteinformation/getdevtest/:hazardid",
  GET_HAZARD_Details:"/siteinformation/gethazarddetails/:hazardid",
  LETTER_GET_NOTICETEMPLATE:"/letter/getletter",
  LETTER_EDIT_NOTICETEMPLATE:"/letter/editnoticetemplate",
  GET_ALLWEBTESTHISTORY:"/webtest/getallwebtesthistory",
  GET_DASHBOARDDATA:"/dashboard/getdashboarddata",
  GET_DASHBOARDDATA_2:"/dashboard/getdashboard2/:Id",
  GET_TEST_RELATED_DETAILS:"/dashboard/gettestrelateddetails/:Id",
  GET_GOOGLE_ADDRESS:"/dashboard/getgoogleaddress",
  GET_GOOGLE_ADDRESS_FROM_ADDRESS:"/dashboard/getgoogleaddressfromaddress",
  GET_GOOGLE_ADDRESS_FROM_GOOGLEAPI:"/dashboard/getgoogleaddressfromgoogleapi",
  GET_EXPORT_DETAILS:"/dashboard/getexportdetails",
  GET_GETTABLE:"/letter/gettable",
  GET_GETCOLUMNBYTABLENAME:"/letter/getprop/:tablename",
  TECHNICIAN_GETTESTKIT_COMPANY:"/technician/gettestkitbycompany/:companyid",
  TECHNICIAN_GETCOMPANY:"/technician/getcompany",  

  //Emailapi
  SEND_SINGLE_EMAIL:"/email/sendsingleemail", 
  SEND_FILE_EMAIL :"/email/sendbulkemail",
  EMAIL_GET_NOTICETEMPLATE: "/email/getnoticelist",
  GET_TESTKITBYFILTER:"/technician/gettestkitbyfilter/:search/:fromdate/:todate",
  GET_COMPANYBYFILTER:"/technician/getcompaniesbyfilter/:search/:fromdate/:todate",
  GET_TECHNICIANSBYFILTER:"/technician/gettechniciansbyfilter/:search/:fromdate/:todate",
  GET_LOCATION_FROMGOOGLE:"/technician/getlocation",
  NOTICE_CREATE_EDIT:"/notice/noticecreateedit",
  GET_TESTKITBYCOMPANY:"/technicians/gettestkitbycompany/:companyID",
  GET_COMPANYLIST:"/technicians/getcompany",
  GET_TESTKIT:"/technicians/gettestkit",
  SEARCH_TESTKIT:"/technicians/searchtestkit/:id",
  SEARCH_COMPANY:"/technicians/searchcompany/:searchtext",
  GET_ADVANCEFILTER_DATA:"/sites/getadvancefilterdata",
  GET_DYNAMIC_DATA:"/sites/dynamicupdate/:updatetable/:updatestring/:conditionstring",

  //store tester image
  STORE_TESTER_IMAGE1:"/imageprocessing/addimage1",
  STORE_TESTER_IMAGE : "/imageprocessing/addimage",
  GET_TESTER_IMAGE : "/imageprocessing/getimage/:testId",
  DELETE_TESTER_IMAGE:"/imageprocessing/deleteimage",
  COMPANY_NOTICETYPE:"/company/getcompanynotice/:noticetype",
  CREATE_COMPANY_NOTICETYPE:"/company/createcompanynoticetype",
  GET_NOTICE_DAYS:"/letter/getnoticedays/:clientID",
  EXPORT_LETTERS:"/letter/exportletters",
  UPDATE_EXPORT_LETTERS:"/letter/updateexportletters",
  UPDATE_HISTORY_TABLE:"/letter/updatehistory",
}

module.exports = config;
