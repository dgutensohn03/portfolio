document.write(`<footer>
        <div class="container-fluid fullHeight">
            <div class="row fullHeight">
                <div class="col-sm-4"></div>
                <div class="col-sm-8">
                    <div id="footerInnerRow" class="row">
                        <div class="col-md-1 d-sm-none d-md-block order-sm-2"></div>
                        <div id="footerLinks" class="col-md-7 col-sm-8 order-sm-3">
                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link footerfont" onclick=" window.open(
                'https://www.valvoline.com/privacy-notice/', 
                '_blank', 
                'width=900,height=800,scrollbars=yes,toolbar=no,menubar=no,status=no,resizable=yes'
            );">PRIVACY</a>
                                </li>
                                <li class="headerVerticalLine white"></li>
                                <li class="nav-item">
                                    <a class="nav-link footerfont"  onclick="parent.navigateIframe('SiteMap.html')";>SITE MAP</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-4 order-sm-1">
                            <ul class="nav justify-content-start footerCopyright">
                                <li class="centerText">
                                    ©2020 All Rights Reserved.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    <div id="privacyMask" class="mask">
        <div class="privacyBG" id="privacyBG">
            <div class="privacyTitle">PRIVACY</div>
            <div style="display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;">
        <p>Please review the <a style="cursor: pointer; text-decoration: underline; color: #E1261C; font-weight: bold;"onclick=" window.open(
                'https://www.valvoline.com/privacy-notice/', 
                '_blank', 
                'width=900,height=800,scrollbars=yes,toolbar=no,menubar=no,status=no,resizable=yes'
            );"target="_blank">Valvoline Privacy Notice</a> once completed please select the Accept or Decline button below to proceed.</p>
    </div>
            <div class="closeButton" onclick="$('#privacyMask').css('display', 'none');">RETURN TO COURSE</div>
            <div id="prRecommended"><span class="closeButton" onclick="markPPAsViewed();">ACCEPT</span> <span class="closeButton" onclick="logOut();">DECLINE</span></div>
        </div>
    </div>`);