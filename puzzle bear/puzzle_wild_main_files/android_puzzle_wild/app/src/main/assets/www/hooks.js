class GradleHooks extends GradleManager{ print(val){ console.log(val); }
/**
GRADLE - KNOWLEDGE IS POWER
***** PROPRIETARY CODE *****
@author : gradle (gradlecode@outlook.com)
@update: 04/08/2019 01:42:00
@version_name: gradle-logic
@version_code: v6.4.0
copyright @2012-2020
*/
	properties(){
		//Ads information
		//===============
		this.banner             = 'ca-app-pub-5543914209672633/4852603017';      //id placement banner
		this.interstitial       = 'ca-app-pub-5543914209672633/3048566756';      //id placement interstitial
		
		this.isTesting          = false; 		//Ads mode testing. set to false for a production mode.
		this.enableBanner       = true; 		//Ads enable the banner. set to false to disable the banner.
		this.enableInterstitial = true; 		//Ads enable the interstitial. set to false to disable all interstitials.
		
		this.bannerAtBottom     = true; 		//if false the banner will be at top
		this.overlap            = false;
		
		this.notifiBackbutton   = true; 		//for confirmation backbutton
		this.notifiMessage      = 'Do you want to exit the game ?';
		
		this.intervalAds        = 1;     		//Ads each interval for example each n times

		this.developer_link     = 'https://sites.google.com/view/puzzle-bear/home';
	}

	//Events manager :
	//================
    do_event(ev, msg){switch(ev){
		
		case 'first_start':
			//gradle.showInter();
			break;
		case 'btn_play':   //Button Play
            gradle.checkInterval() && gradle.showInter();
			break;

		case 'game_end':   //Game Over Event 
			//gradle.showInter();
			break;
			
		case 'btn_sound':  //button retry on the dialog game over
			//gradle.showInter();
			break;
			
		case 'btn_music': //btn home on the dialog game over
			//gradle.showInter();
			break;

		case 'more_games':
			gradle.share.apply();
			break;
			
		case 'test':
			//gradle.checkInterval() && gradle.showInter();
			break;		
			
    }}

}

gradle = new GradleHooks();
gradle.run();


