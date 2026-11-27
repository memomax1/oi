/* ADS: every ad slot lives here. To remove an ad, change its line to null. */
const B=(key,w,h)=>`<script>atOptions={'key':'${key}','format':'iframe','height':${h},'width':${w},'params':{}};</script><script data-cfasync="false" src="https://bauval.org/22/${key}"></script>`;
const NATIVE=`<script async fetchpriority="high" data-cfasync="false" src="https://bauval.org/21/fea48d233e3fb5fa729730759dae7207"></script><div id="container-fea48d233e3fb5fa729730759dae7207"></div>`;
const ADS={
mode:"frame", /* "frame" = each ad in its own frame (recommended). "safe" = same but extra-protected. "direct" = placed straight in the page. */
extra:"https://bauval.org/14/780e7dd050cabc042fe515a71fc4dc9d", /* site-wide script (type: check in your ad account). Set to "" to turn off. */
homeTop:{w:468,h:60,min:520,code:B("d6900bc920a2da0e411bb54cbba13ede",468,60)},        /* home, above articles (desktop) */
homeTopMobile:{w:320,h:50,max:519,code:B("46f7e3e98a0485b4ad583905fecc3e0e",320,50)},  /* home, above articles (phones) */
homeBottom:{w:"100%",h:300,code:NATIVE},                                                  /* home, below articles */
articleMid:{w:300,h:250,code:B("4e5c14d7735ab136ad66e6a3adeac04d",300,250)},            /* articles, after 3rd paragraph */
articleEnd:{w:"100%",h:300,code:NATIVE},                                                  /* articles, at the end */
railLeft:{w:160,h:600,min:1500,code:B("5df00d67c53d82b69b2ca097d89f572c",160,600)},      /* very wide screens only, left side */
railRight:null
};
