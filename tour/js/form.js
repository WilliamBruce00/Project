var lab = document.querySelectorAll("label");
var input = document.querySelectorAll("input");
var log = document.querySelectorAll(".log");

input.forEach((item) => {
  item.onfocus = (e) => {
    if (e.target.getAttribute("index") == "1") {
      Object.assign(lab[1].style, {
        top: "-5px",
        fontSize: "10px",
        color: "black",
      });
    }
    if (e.target.getAttribute("index") == "2") {
      Object.assign(lab[2].style, {
        top: "67px",
        fontSize: "10px",
        color: "black",
      });
    }
  };
  item.onblur = (e) => {
    if (input[0].value == "") {
      if (e.target.getAttribute("index") == "1") {
        Object.assign(lab[1].style, {
          top: "10px",
          fontSize: "12px",
          color: "gray",
        });
      }
    }
    if (input[1].value == "") {
      if (e.target.getAttribute("index") == "2") {
        Object.assign(lab[2].style, {
          top: "85px",
          fontSize: "12px",
          color: "gray",
        });
      }
    }
  };
});

log[0].onclick = () => {
  location.href =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=859491851234128&kid_directed_site=0&app_id=859491851234128&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.2%2Fdialog%2Foauth%3Fapp_id%3D859491851234128%26cbt%3D1684651036889%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df15674721ff1b1%2526domain%253Dsaigontourist.net%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fsaigontourist.net%25252Ff16fc1dbb9ec4f8%2526relation%253Dopener%26client_id%3D859491851234128%26display%3Dpopup%26domain%3Dsaigontourist.net%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fsaigontourist.net%252Fvi%252Flogin%26locale%3Den_US%26logger_id%3Df26745c18496934%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df75195a27b1104%2526domain%253Dsaigontourist.net%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fsaigontourist.net%25252Ff16fc1dbb9ec4f8%2526relation%253Dopener%2526frame%253Df4c3c1ba7ac1e4%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Demail%26sdk%3Djoey%26version%3Dv2.2%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df75195a27b1104%26domain%3Dsaigontourist.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsaigontourist.net%252Ff16fc1dbb9ec4f8%26relation%3Dopener%26frame%3Df4c3c1ba7ac1e4%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0";
  input[0].value = "";
  input[1].value = "";
};
log[1].onclick = () => {
  location.href =
    "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fsaigontourist.net%3Fid%3Dauth259463&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=212764842680-gjd09nppc53ue5rbj5c0uvf5cpc59nqd.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fsaigontourist.net&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow";
  input[0].value = "";
  input[1].value = "";
};
