/**
	GRADLE - KNOWLEDGE IS POWER
	***** PROPRIETARY CODE *****
	@author : gradle (gradlecode@outlook.com)
	@update: 02/07/2019 12:39:00
	@version_name: gradle-logic
	@version_code: v6.0.0
	copyright @2012-2020
*/
var game_data = {
    row: 10,
    col: 12,
    color: 6,
    size: 64,
    start_x: 70,
    start_y: 190,
    fall_duration: 80,
    cur_level: 2,
    total_level: 90,
    unlocked_level: 1,
    line_distance: 36,
    booster_at: 5,
    sound: true,
    music: true,
    enable_reward: false,
    reward: {
        loaded: false,
        ready: true,
    }
}
var levels_star = [];

class GradleApi {
	//Ready : /!\ DO NOT CHANGE, ONLY IF YOU ARE AN EXPERT.
	//=========================

	start(){
		//ok
		setTimeout(function(){gradle.hideSplash()}, 10);
	}
	
	processBackbutton(){ //return null;
		var key=null;
		/*if(gradle_settings == true){
		    game.state.start('Menu');
		    gradle_settings = false;
		    key = 'settings';
		}
		else if(typeof game.state.getCurrentState().key!='undefined'){
			key = game.state.getCurrentState().key;
			switch(key){
				case 'Menu':
					key=null;
					break;
				case 'Game':
					//game.state.start('Menu');
					main.game.self.pauseBtnClicked();
					break;
			}
		}*/
		return key;
	}
	
	event(ev, msg){
		if(gradle.first_start && ev=='game_loaded'){setTimeout(function(){gradle.hideSplash()}, 10);return !1;}
		/*switch(ev){
			case 'main_menu':
				//document.body.style.backgroundImage = "url('images/bg_menu.jpg')";
				break;
			case 'list_picture':
				//document.body.style.backgroundImage = "url('images/bg_select.jpg')";
				break;
			case 'draw_image':
				//document.body.style.backgroundImage = "url('images/bg_game.jpg')";
				break;
		}*/
	}
	
	onVisibilityNo(){
		gradle.log('visibility no');
		//gradle_onPauseRequested();
		game.sound.mute=true;
	}
	
	onVisibilityYes(){
		gradle.log('visibility yes');
		//gradle_onResumeRequested();
		game.sound.mute=false;
	}	
}




