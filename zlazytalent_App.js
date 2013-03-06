
// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Model: MESSAGES
// ==========================================================================

zlazytalent.MESSAGES = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'MESSAGES',

    /* Sample model properties: */

    name: M.Model.attr('String',{
            isRequired:YES
    }),
    
    avatar: M.Model.attr('String',{
            isRequired:YES
    }),

    content: M.Model.attr('String', {
        isRequired:YES
    }),

    time: M.Model.attr('String', {
        isRequired:YES
    }),

}, M.DataProviderLocalStorage);

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Model: TALENT_PROFILE
// ==========================================================================

zlazytalent.TALENT_PROFILE = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'TALENT_PROFILE',

    /* Sample model properties: */
    /*
    skill: M.Model.hasMany('SKILL', {
        isRequired:NO
    }),
    tam bo
    */
    employment_status: M.Model.attr('String', {
        isRequired:YES
    }),
    
    company_size: M.Model.attr('String', {
        isRequired:YES
    }),

    career_search_status: M.Model.attr('String', {
        isRequired:YES
    }),

    highest_education_level: M.Model.attr('String', {
        isRequired:YES
    }),

    legally_eligible: M.Model.attr('Integer', {
        isRequired:YES
    }),

    willing_to_allocate: M.Model.attr('Integer', {
        isRequired:YES
    }),


}, M.DataProviderLocalStorage);

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Model: ACCOUNT
// ==========================================================================

zlazytalent.ACCOUNT = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'ACCOUNT',

    /* Sample model properties: */

    leanToken		: M.Model.attr('String',{
		isRequired: NO
    }),

    role		: M.Model.attr('Integer', {
		isRequired: YES,
		validators: [M.NumberValidator]
    }),
    
}, M.DataProviderLocalStorage);

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Model: VIEWED
// ==========================================================================

zlazytalent.VIEWED = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'VIEWED',

    /* Sample model properties: */

    name: M.Model.attr('String',{
            isRequired:YES
    }),
    
    avatar: M.Model.attr('String',{
            isRequired:YES
    }),

    content: M.Model.attr('String', {
        isRequired:YES
    }),

    time: M.Model.attr('String', {
        isRequired:YES
    }),

}, M.DataProviderLocalStorage);

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Model: SKILL
// ==========================================================================

zlazytalent.SKILL = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'SKILL',

    /* Sample model properties: */

    name: M.Model.attr('String',{
            isRequired:YES
    }),
}, M.DataProviderLocalStorage);

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Model: CANDIDATES
// ==========================================================================

zlazytalent.CANDIDATES = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'CANDIDATES',

    /* Sample model properties: */

    name: M.Model.attr('String',{
            isRequired:YES
    }),
    
    avatar: M.Model.attr('String',{
            isRequired:YES
    }),

    content: M.Model.attr('String', {
        isRequired:YES
    }),

}, M.DataProviderLocalStorage);

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Model: USER
// ==========================================================================

zlazytalent.USER = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'USER',

    /* Sample model properties: */

    leanToken		: M.Model.attr('String',{
            isRequired:YES
    }),
    id			: M.Model.attr('String',{
            isRequired:YES
    }),
    name		: M.Model.attr('String',{
            isRequired:YES
    }),
    first_name		: M.Model.attr('String',{
            isRequired:YES
    }),
    last_name		: M.Model.attr('String',{
            isRequired:YES
    }),
    link		: M.Model.attr('String',{
            isRequired:YES
    }),
    location		: M.Model.attr('String',{
            isRequired:YES
    }),
    favorite_teams	: M.Model.attr('String',{
            isRequired:YES
    }),
    favorite_athletes	: M.Model.attr('String',{
            isRequired:YES
    }),
    gender		: M.Model.attr('String',{
            isRequired:YES
    }),
    timezone		: M.Model.attr('String',{
            isRequired:YES
    }),
    locale		: M.Model.attr('String',{
            isRequired:YES
    }),
    updated_time	: M.Model.attr('String',{
            isRequired:YES
    })   

}, M.DataProviderLocalStorage);

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Profile
// ==========================================================================

zlazytalent.Profile = M.Controller.extend({

    /* property */
    ON_LOG : true ,
    // ds skill
    skills	:[],
    //skillduoc chon de remove
    skillSelect	:null,
    //skill duoc chon de add
    skillName	:null,
    /*
    * Method
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            /* do something here, when page is loaded the first time. */
	   
        }
        if(this.isHasProfile()){
		//update
		this.updateViewProfile();
	}
        /* do something, for any other load. */	
    },
    saveDialog: function(){
	M.DialogView.confirm({
	    title: 'Log out',
	    message: 'Do you really want to save profile?',
	    confirmButtonValue: 'OK',
	    cancelButtonValue: 'Cancel',
	    callbacks: {
		confirm: {
		    target: zlazytalent.Profile,
		    action: 'saveProfile'
		},
		cancel: {
		    target: zlazytalent.Profile,
		    action: 'doNothing'
		}
	    }
	});    
    },
    saveProfile: function(){
	var profile = {
		//skill 			: M.ViewManager.getView('profilePage', 'select1').getValue(),
		employment_status 	: M.ViewManager.getView('profilePage', 'select2').getValue(),
		company_size 		: M.ViewManager.getView('profilePage', 'select3').getValue(),
		career_search_status	: M.ViewManager.getView('profilePage', 'select4').getValue(),
		highest_education_level	: M.ViewManager.getView('profilePage', 'select5').getValue(),
		legally_eligible	: M.ViewManager.getView('profilePage', 'select6').getValue(),
		willing_to_allocate	: M.ViewManager.getView('profilePage', 'select7').getValue()
	}
	if(this.isHasProfile()){
		//update
		this.updateProfile(profile);
	}
	else{
		//create
		this.createProfile(profile);
	}
    },
    createProfile: function(profile){
	zlazytalent.TALENT_PROFILE.createRecord({
		//skill			: profile.skill,
		employment_status	: profile.employment_status,
		company_size		: profile.company_size,
		career_search_status	: profile.career_search_status,
		highest_education_level : profile.highest_education_level,
		legally_eligible	: profile.legally_eligible,
		willing_to_allocate 	: profile.willing_to_allocate
	}).save();
    },
    updateProfile: function(profiles){
	var profileList = zlazytalent.TALENT_PROFILE.find();
	var profile     = profileList[profileList.length-1];
	//profile.set('skill'			, profiles.skill);
	profile.set('employment_status'		, profiles.employment_status);
	profile.set('company_size'		, profiles.company_size);
	profile.set('career_search_status'	, profiles.career_search_status);
	profile.set('highest_education_level' 	, profiles.highest_education_level);
	profile.set('legally_eligible'		, profiles.legally_eligible);
	profile.set('willing_to_allocate'	, profiles.willing_to_allocate);
	profile.save();
    },
    updateViewProfile: function(profiles){
	var profileList = zlazytalent.TALENT_PROFILE.find();
	var profile     = profileList[profileList.length-1];
	
	//M.ViewManager.getView('profilePage', 'select1').setSelection(profile.get('skill'));
	this.skills = profile.get('skill');
	
	M.ViewManager.getView('profilePage', 'select2').setSelection(profile.get('employment_status'));
	M.ViewManager.getView('profilePage', 'select3').setSelection(profile.get('company_size'));
	M.ViewManager.getView('profilePage', 'select4').setSelection(profile.get('career_search_status'));
	M.ViewManager.getView('profilePage', 'select5').setSelection(profile.get('highest_education_level'));
	M.ViewManager.getView('profilePage', 'select6').setSelection(profile.get('legally_eligible'));
	M.ViewManager.getView('profilePage', 'select7').setSelection(profile.get('willing_to_allocate'));
    },
    isHasProfile: function() {
	var profileList = zlazytalent.TALENT_PROFILE.find();
	var profile     = profileList[profileList.length-1]; 
	if(!jQuery.isEmptyObject(profile)){
		if(!profile.get('employment_status')) {
			return false;
		}
		return true;
	}
        return false;
    },
    
    removeSkillDialog: function(domId, modelId){
	//find skill
	//var profileList = zlazytalent.TALENT_PROFILE.find();
	//var profile     = profileList[profileList.length-1];	
	//var skillList
	//save
	M.Logger.log('domId = '+domId +'modelId = '+modelId, M.INFO, this.ON_LOG);
	
	this.set('skillSelect', modelId);
	
	M.DialogView.confirm({
	    title: 'Remove',
	    message: 'Do you really want to remove this skill?',
	    confirmButtonValue: 'OK',
	    cancelButtonValue: 'Cancel',
	    callbacks: {
		confirm: {
		    target: zlazytalent.Profile,
		    action: 'removeSkill'
		},
		cancel: {
		    target: zlazytalent.Profile,
		    action: 'doNothing'
		}
	    }
	});    
    },
   
    addSkillDialog: function(){
	this.skillName = M.ViewManager.getView('profilePage', 'select_skill').getValue();
	var check = false;
	for (var i in this.skills) {
		if (this.skills.hasOwnProperty(i)) { // filter
			if(this.skills[i].get('name') == this.skillName){
				check = true;
				break;
			}
		}
	}
	if(check == false){
	M.DialogView.confirm({
	    title: 'Remove',
	    message: 'Do you really want to add '+ this.skillName +' skill?',
	    confirmButtonValue: 'OK',
	    cancelButtonValue: 'Cancel',
	    callbacks: {
		confirm: {
		    target: zlazytalent.Profile,
		    action: 'addSkill'
		},
		cancel: {
		    target: zlazytalent.Profile,
		    action: 'doNothing'
		}
	    }
	});
	}
    },
					  
    addSkill: function(){
	
	//save (note done)
	var s = zlazytalent.SKILL.createRecord({
		name: this.skillName
	});
	//update
	this.set('skills', [s], true);
	
    },
					  
    createSkill: function(){
    
    },
    removeSkill:function(){
	//del (note done)
	if(this.skillSelect != null){
		//this.skillSelect.del();
		for (var i in this.skills) {
			if(this.skills[i].get('name') == this.skillSelect){
			this.skills.splice(i, 1);
			}			
		}
		this.observable.notifyObservers('skills');
	}	
    }
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Roles
// ==========================================================================

zlazytalent.Roles = M.Controller.extend({

    /* sample controller property */
    listFunctions: null,
    listRecruiterRoles: null,
    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            this.set('listFunctions', [
		  {
		      name: "Role1",
		      image: 'theme/images/appicon.png',
		      content: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		      page: 'rolesImformationPage'
		  },{
		      name: "Role2",
		      image: 'theme/images/appicon.png',
		      content: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		      page: 'rolesImformationPage'
		  }
	      ]);
		   
        }
        /* do something, for any other load. */
	M.Logger.log("zlazytalent.Roles load", M.INFO, this.ON_LOG);
    },
    loadRolesRecruiter: function(isFirstLoad) {
        if(isFirstLoad) {
	      this.set('listRecruiterRoles', [
		  {
		      label: 'Role1',
		      star : 0
		  },{
		      label: 'Role2',
		      star : 1
		  },{
		      label: 'Role3',
		      star : 2
		  },{
		      label: 'Role4',
		      star : 3
		  },{
		      label: 'Role5',
		      star : 4
		  }
	      ]);
	      this.addRole(1,'theme/images/100812_manager.jpg','#01023');
	      this.loadStar();	
        }
        /* do something, for any other load. */
		M.Logger.log("zlazytalent.Roles load", M.INFO, this.ON_LOG);
    },
    loadStar: function(){
    	var that = this, li, ul = M.ViewManager.getView('rolesRecruiterPage', 'content');
    	$('#'+ul.id).find('li').each(function(i, item){
    		$(this).find('.star').raty({
		    	half  : true,
		    	score : that.listRecruiterRoles[i].star,
		    	path  : 'https://raw.github.com/wbotelhos/raty/master/img/'
	    	});
    	});
    },
    addRole: function(listNumber,img,id){
    	var li, ul = M.ViewManager.getView('rolesRecruiterPage', 'content'),i = 0;
    	$('#'+ul.id).find('li').each(function(){
    		i++;
    		li = $(this);
    		if(i == listNumber){
    			return false;
    		}

    	});    	
    	var pic = M.ImageView.design({
    		events: {
                tap: {
                    target: zlazytalent.Roles,
                    action: function(){
                    	alert('FUCK');
                    }
                }
            },
			value: img,
			cssClass: 'role-img',
			cssStyle:"display:inline;",
			attribute:{
				"data-id":id
			}

		});		
    	li.find('.list-roles').append(pic.render());
    	pic.registerEvents();
    	
    },
    loadRolesRecruiterView:function(){
    	var num = Math.floor(Math.random()*(1+this.listRecruiterRoles.length-0))+0;//low <= n < height
    	//Math.floor(Math.random()*(1+High-Low))+Low;
    	this.addRole(num,'theme/images/100812_manager.jpg','#01023');

    },
    /*
    *Method
    */    
    setSearchRolesActiveTab:function(){
	
	var content = M.ViewManager.getView('searchRolesPage', 'content');
	var tabview = M.ViewManager.getView(content, 'tabview');
	var inbox   = M.ViewManager.getView(tabview, 'searchRole');
	tabview.setActiveTab(inbox);
    },   
    setSavedRolessActiveTab:function(){
	 
	var content = M.ViewManager.getView('savedRolesPage', 'content');
	var tabview = M.ViewManager.getView(content, 'tabview');
	var inbox   = M.ViewManager.getView(tabview, 'savedRole');
	tabview.setActiveTab(inbox);
    }

});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Welcome
// ==========================================================================

zlazytalent.Welcome = M.Controller.extend({

    /*property */
    ON_LOG : true ,

    init: function(isFirstLoad) {
        if(isFirstLoad) {
            /* do something here, when page is loaded the first time. */
	    M.Logger.log("zlazytalent.Welcome first load", M.INFO, this.ON_LOG);	    
        }
        /* do something, for any other load. */
	M.Logger.log("zlazytalent.Welcome load", M.INFO, this.ON_LOG);
	M.Logger.log("zlazytalent.Authorization.getRole() = " +zlazytalent.Authorization.getRole() + L.RECRUITER , M.INFO, this.ON_LOG);
    },
    
    selectRecruiter: function(){
	zlazytalent.Authorization.setRoleRecruiter();
	zlazytalent.PageManager.gotoWelcomePage();
    },
    selectTalent: function(){    
	zlazytalent.Authorization.setRoleTalent();
	zlazytalent.PageManager.gotoWelcomePage();
    },
					  
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Candidates
// ==========================================================================

zlazytalent.Candidates = M.Controller.extend({

    /* property */
    ON_LOG : true ,
    listSaveCandidates: null,
    listCandidates: null,
    candidates:null,
    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
	    /* do something here, when page is loaded the first time. */		
	    var b = zlazytalent.CANDIDATES.createRecord ({
		      name	: 'Saved Candidates 1',
		      avatar	: 'https:\/\/si0.twimg.com\/profile_images\/2740079010\/97e32492a73f26d78143b325903e124b_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      
	    });
	    var c = zlazytalent.CANDIDATES.createRecord ({
		      name	: 'Saved Candidates 2',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/3061138014\/d84e6c2aad6c843c54f1549423a8a82c_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		     
	    });
	    var d = zlazytalent.CANDIDATES.createRecord ({
		      name	: 'Saved Candidates 3',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/2323277496\/77sctramy07cet1a2izo_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      
	    });
	    this.set('listSaveCandidates', [ b, c ,d ]);

        }
        /* do something, for any other load. */
	M.Logger.log('zlazytalent.Candidates first load', M.INFO, this.ON_LOG);
    },
    loadData: function(isFirstLoad) {
        if(isFirstLoad) {		
            /* do something here, when page is loaded the first time. */
		var a = zlazytalent.CANDIDATES.createRecord ({
		      name	: 'Candidates 2',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/3061138014\/d84e6c2aad6c843c54f1549423a8a82c_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      
	    });
	    this.set('listCandidates', [ a ]);
        }
        /* do something, for any other load. */
	M.Logger.log('zlazytalent.Candidates first load', M.INFO, this.ON_LOG);
    },

    /*
    * Method
    */
    setSearchCandidatesActiveTab:function(){
		var content = M.ViewManager.getView('candidatesSearchPage', 'content');
		var tabview = M.ViewManager.getView(content, 'tabview');
		var inbox   = M.ViewManager.getView(tabview, 'searchCandidates');
		tabview.setActiveTab(inbox);
    },   
    setSavedCandidatesActiveTab:function(){
		var content = M.ViewManager.getView('candidatesSavedPage', 'content');
		var tabview = M.ViewManager.getView(content, 'tabview');
		var inbox   = M.ViewManager.getView(tabview, 'savedCandidates');
		tabview.setActiveTab(inbox);
    },
    gotoSingleCandidate: function(domId, modelId){
		M.Logger.log('domId = '+domId +'modelId = '+modelId, M.INFO, this.ON_LOG);
		this.set('candidates', zlazytalent.CANDIDATES.recordManager.getRecordById(modelId));
		M.Logger.log(this.candidates.get('name'), M.INFO, this.ON_LOG);
		this.switchToPage('candidatesViewPage');
    },
    viewCandidatesViewPage: function(){
		var label = M.ViewManager.getView('candidatesViewPage', 'label');
		if(label != null){
			//label.setValue();
		}else{
			M.Logger.log('not found label object ', M.INFO, this.ON_LOG);
		}
    },
    isLoadCloseButton:false,
    openSearchCandidatesTabs: function(){
    	if(!this.isLoadCloseButton){
    		var rightContent = M.ContainerView.design({				
				childViews: 'close_button',
				close_button: M.LabelView.design({
					events: {
						tap: {
							target: zlazytalent.Candidates,
							action: 'closeSearchCandidatesTabs'
						}
					},					
				    value: '<h1 style="padding: 10px;font-size: 20px;cursor: pointer;">Close</h1>',				    
				    cssClass: '',
				}),
				anchorLocation: M.RIGHT,
			});
	    	var html = rightContent.render();	    	
	    	$('#HeaderSearchCandidatesTabs .ui-btn-right').append(html);
    		rightContent.registerEvents();
    		this.isLoadCloseButton = true;
    	}
    	$('.result-search-candidates-tabs').show(function(){
    		$(this).animate({
		       top: "300px"
		    }, { duration: 300, queue: false });
    	});
    },
    closeSearchCandidatesTabs: function(){
    	$('.result-search-candidates-tabs').animate({
		   top: "100%"		
		}, { duration: 300, queue: false ,complete: function(){
			$(this).hide(function(){});
		}});
    	
    },
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: zTestController
// ==========================================================================

zlazytalent.zTestController = M.Controller.extend({

    /* property */
    leanToken:null,
    
    
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            /* do something here, when page is loaded the first time. */
        }
        /* do something, for any other load. */
    },

    getLeanToken: function(){
		this.leanToken = $('.lean_token').val();
		return this.leanToken;
    },

    logOutTest: function(){
	    alert('logOutTest')
    },
    
    createRecruiterProfile: function(){       
	   M.Request.init({
            url: 'http://plentyofjobsforyou.appspot.com//rest/v1/entity/recprofile?lean_token='+this.getLeanToken(),
            method: 'POST',
            isJSON: YES,
            data: {"avatar":"images facebook\/linkedin","headline":"Technical Recruiter","Current_position":"Yelp Recruiter","Facebook_profile":"https:\/\/www.facebook.com\/simyrajan","Linkedin_profile":"http:\/\/www.linkedin.com\/in\/simyrajan","_kind":"recprofile"}, 
            beforeSend: function(xhr) { 
                xhr.setRequestHeader('Access-Control-Allow-Origin','*'); 
            }, 
            onSuccess: function(data, msg, xhr) {
                console.log('Request succesful');
                console.log(data);
                console.log(msg);
                console.log(xhr);
            },
            onError: function(xhr, msg) {
                console.log('Error: ' + msg);
            }
        }).send();
    },
	createTalentProfile: function(){
       M.Request.init({
            url: 'http://plentyofjobsforyou.appspot.com/rest/v1/entity/profile?lean_token='+this.getLeanToken(),
            method: 'POST',
            isJSON: YES,
            data: {"skillsets":"javascript, ROR, java,Objective-C","employment_status":"employed","Company_size":"Large(>500)","Career_search_status":"Seriously looking","Education":"GraduateSchool", "Are you eligible to work in US":"Yes", "Are you willling to allocate":"Yes", "_kind":"profile"},
            beforeSend: function(xhr) { 
                xhr.setRequestHeader('Access-Control-Allow-Origin','*'); 
            }, 
            onSuccess: function(data, msg, xhr) {
                console.log('Request succesful');
                console.log(data);
                console.log(msg);
                console.log(xhr);
            },
            onError: function(xhr, msg) {
                console.log('Error: ' + msg);
            }
        }).send();
    },					  
	createRoleProfile: function(){
       M.Request.init({
            url: 'http://plentyofjobsforyou.appspot.com/rest/v1/entity/jobs?lean_token='+this.getLeanToken(),
            method: 'POST',
            isJSON: YES,
            data: {}, 
            beforeSend: function(xhr) { 
                xhr.setRequestHeader('Access-Control-Allow-Origin','*'); 
            }, 
            onSuccess: function(data, msg, xhr) {
                console.log('Request succesful');
                console.log(data);
                console.log(msg);
                console.log(xhr);
            },
            onError: function(xhr, msg) {
                console.log('Error: ' + msg);
            }
        }).send();
    },  					  
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: SearchRoles
// ==========================================================================

zlazytalent.SearchRoles = M.Controller.extend({

   
    init: function(isFirstLoad) {
        if(isFirstLoad) {
           
        }
        
    },

    search: function() {
		M.DialogView.alert({
			title: 'No Connection',
			message: 'No Connection available. Request failed.',
			confirmButtonValue: 'Ok',
			callbacks: {
				confirm: {
					action: function() {
						console.log('Ok');
					}
				}
			}
		})
    }
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Viewed
// ==========================================================================

zlazytalent.Viewed = M.Controller.extend({

    /* sample controller property */
	ON_LOG : true ,
    listViewed: null,
	viewed:null,
    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {		 
		 var b = zlazytalent.VIEWED.createRecord ({
		      name	: 'Recruiter 1',
		      avatar	: 'https:\/\/si0.twimg.com\/profile_images\/2740079010\/97e32492a73f26d78143b325903e124b_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	    });
	    var c = zlazytalent.VIEWED.createRecord ({
		      name	: 'Recruiter 2',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/3061138014\/d84e6c2aad6c843c54f1549423a8a82c_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	    });
	    var d = zlazytalent.VIEWED.createRecord ({
		      name	: 'Recruiter 3',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/2323277496\/77sctramy07cet1a2izo_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	    });
	     this.set('listViewed', [ b, c ,d ]);
        }
        /* do something, for any other load. */
		M.Logger.log('zlazytalent.Viewed first load', M.INFO, this.ON_LOG);
    },

    /*
    * Example function, which shows how to switch to another page
    * Function is triggered by setting target & action in a view.
    */
    gotoViewedViewPage: function(domId, modelId){
		M.Logger.log('domId = '+domId +'modelId = '+modelId, M.INFO, this.ON_LOG);
		this.set('viewed', zlazytalent.VIEWED.recordManager.getRecordById(modelId));
		M.Logger.log(this.viewed.get('name'), M.INFO, this.ON_LOG);
		this.switchToPage('viewedViewPage');
    },
    viewViewedViewPage: function(){
		var label = M.ViewManager.getView('viewedViewPage', 'label');
		if(label != null){
			//label.setValue();
		}else{
			M.Logger.log('not found label object ', M.INFO, this.ON_LOG);
		}
    }

});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: MyHome
// ==========================================================================

zlazytalent.MyHome = M.Controller.extend({

    /* sample controller property */
    ON_LOG : true,
    listFunctions: null,
    
    listRecruiterFunctions: null,
    listTalentFunctions: null,
    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
	    M.Logger.log("zlazytalent.MyHome first load", M.INFO, this.ON_LOG);
	    //zlazytalent.PageManager.gotoHome();
            /* do something here, when page is loaded the first time. */
	    this.set('listFunctions', [
		  {
		      name: "Search Roles",
		      page: 'searchRolesPage'
		  },
		  {
		      name: "Visitors",
		      page: 'visitorsPage'
		  },
		  {
		      name: "Message",
		      page: 'messageInboxPage'
		  },
		  {
		      name: "Rating",
		      page: 'ratingPage'
		  },
		  {
		      name: "Profile",
		      page: 'profilePage'
		  },
		  {
		      name: "Setting",
		      page: 'settingPage'
		  },
		  {
		      name: "Singup Talents Profile",
		      page: 'singupTalentsProfile'
		  },
		  {
		      name: "Signup Recruiters Profile",
		      page: 'singupRecruitersProfile'
		  },
		  {
		      name: "Signup Email",
		      page: 'signupEmailPage'
		  }
	      ]);
	      this.set('listRecruiterFunctions', [
		  {
		      name: "Candidates",
		      page: 'candidatesSearchPage'
		  }, 
		  {
		      name: "Roles",
		      page: 'rolesRecruiterPage'
		  },
		  {
		      name: "Profile",
		      page: 'profileRecruiterPage'
		  },
		  {
		      name: "Messages",
		      page: 'messageInboxPage'
		  },
		  {
		      name: "zTest",
		      page: 'zTest'
		  }
	      ]);
	      this.set('listTalentFunctions', [
		  {
		      name: "Roles",
		      page: 'searchRolesPage'
		  },
		  {
		      name: "Message",
		      page: 'messageInboxPage'
		  },
		  {
		      name: "Profile",
		      page: 'profilePage'
		  },
		  {
		      name: "Viewed",
		      page: 'viewedPage'
		  },
		  {
		      name: "zTest",
		      page: 'zTest'
		  }
	      ]);
	     
	       $('#star').raty({
		    half  : true,
		    score : 3.3,
		    path  : 'https://raw.github.com/wbotelhos/raty/master/img/'
		  });
	       $('.score').raty({
		    half  : true,
		    score : 3.3,
		    path  : 'https://raw.github.com/wbotelhos/raty/master/img/'
		  });
		
	      /**
	      $.getScript('https://raw.github.com/wbotelhos/raty/master/js/jquery.raty.min.js', function() {
		  $('#star').raty({
		    half  : true,
		    score : 3.3,
		    path  : 'https://raw.github.com/wbotelhos/raty/master/img/'
		  });
	      });
	     */     
        }
        /* do something, for any other load. */
	M.Logger.log("zlazytalent.MyHome load", M.INFO, this.ON_LOG);
    },
    
    logoutDialog: function(){
	M.DialogView.confirm({
	    title: 'Log out',
	    message: 'Do you really want to logout this app?',
	    confirmButtonValue: 'OK',
	    cancelButtonValue: 'Cancel',
	    callbacks: {
		confirm: {
		    target: zlazytalent.Authorization,
		    action: 'logout'
		},
		cancel: {
		    target: zlazytalent.MyHome,
		    action: 'doNothing'
		}
	    }
	});
    
    }
    
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Setting
// ==========================================================================

zlazytalent.Setting = M.Controller.extend({
    listItemDefault	: null,
    listItemAbout 	: null,
    listItemDebug 	: null,
    init: function(isFirstLoad) {
        if(isFirstLoad) {
	    this.set('listItemDefault', [
		 {
		      name: "Setting 1",
		      page: null
		  },
		  {
		      name: "Setting 2",
		      page: null
		  }
	    ]);
            this.set('listItemAbout', [
		  {
		      name: "Setting 4",
		      page: null
		  },
		  {
		      name: "Setting 5",
		      page: null
		  },
		  {
		      name: "Setting 6",
		      page: null
		  }
	      ]);
	      this.set('listItemDebug', [
		  {
		      name: "Report a Problem",
		      page: null
		  }
	      ]);
        }
	var a = true;
	if(a == true){
		var button = M.ViewManager.getView('settingPage', 'push_notification_switch');
		button.on();		
	}
    },    

});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Visitors
// ==========================================================================

zlazytalent.Visitors = M.Controller.extend({

    listItemAbout 	: null,  
  
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            this.set('listItemAbout', [
		  {
		    "userName":"Recruiter 1",
		    "userImage":"https:\/\/si0.twimg.com\/profile_images\/2740079010\/97e32492a73f26d78143b325903e124b_normal.jpeg",
		    "createdAt":"Fri, 04 Jan 2013 05:47:01 +0000",
		    "tweet":"Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class='score'></div>"

	    },{
		    "userName":"Recruiter 2",
		    "userImage":"http:\/\/a0.twimg.com\/profile_images\/3061138014\/d84e6c2aad6c843c54f1549423a8a82c_normal.jpeg",
		    "createdAt":"Fri, 04 Jan 2013 05:47:01 +0000",
		    "tweet":"Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class='score'></div>"

	    },{
		    "userName":"Recruiter 2",
		    "userImage":"http:\/\/a0.twimg.com\/profile_images\/2323277496\/77sctramy07cet1a2izo_normal.jpeg",
		    "createdAt":"Fri, 04 Jan 2013 05:47:01 +0000",
		    "tweet":"Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class='score'></div>"

	    }]);
        }
       
    },
    

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: SignUp
// ==========================================================================

zlazytalent.SignUp = M.Controller.extend({

    /*property */
    ON_LOG : true ,

    /*
    * Method
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            /* do something here, when page is loaded the first time. */
	    M.Logger.log("zlazytalent.SignUp first load", M.INFO, this.ON_LOG);
        }
        /* do something, for any other load. */
	M.Logger.log("zlazytalent.SignUp load", M.INFO, this.ON_LOG);
	
    },
    
    gotoSignupEmailPage_Recruiters: function() {
	this.signupType = 'Recruiters';
	this.switchToPage('signupEmailPage');	
    },
    
    gotoSignupEmailPage_Talents: function() {
	this.signupType = 'Talents';
	this.switchToPage('signupEmailPage');	
    },
    
    gotoSignupProfilePage: function() {
	if(this.signupType == 'Talents'){
		this.switchToPage('singupTalentsProfile');
	}
	else{
		this.switchToPage('singupRecruitersProfile');
	}
    },
	
    gotoSignupCreateRolesPage: function() {
	this.switchToPage('signupCreateRolesPage');
    },
					 
    gotoHomePage:function(){    
	if(this.signupType == 'Talents'){
		this.switchToPage('homeTalentsPage');
	}
	else{
		this.switchToPage('homeRecruiterPage');
	}
    }
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: PageManager
// ==========================================================================

zlazytalent.PageManager = M.Controller.extend({
  
    ON_LOG : true ,
    
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            /* do something here, when page is loaded the first time. */
	    M.Logger.log("zlazytalent.PageManager first load", M.INFO, this.ON_LOG);
        }
        /* do something, for any other load. */
	M.Logger.log("zlazytalent.PageManager load", M.INFO, this.ON_LOG);
    },   
    
    gotoHome: function() {
	M.Logger.log("go to HomePage", M.INFO, this.ON_LOG);
	//if(zlazytalent.Authorization.isLogin()){
		if(zlazytalent.Authorization.getRole() == L.RECRUITER){
			this.switchToPage('homeRecruiterPage');
		}
		else if(zlazytalent.Authorization.getRole() == L.TALENT){
			this.switchToPage('homeTalentsPage');
		}
	//}
	//else{
		//this.switchToPage('welcomePage');
	//}
    },
    gotoRoles: function() {
	M.Logger.log("go to RolesPage", M.INFO, this.ON_LOG);
        //if(zlazytalent.Authorization.isLogin()){		
		this.switchToPage('rolesPage');
	//}
	//else{
		//this.switchToPage('loginPage');
	//}
    },
    gotoSearchRoles: function() {
	M.Logger.log("go to SearchRolesPage", M.INFO, this.ON_LOG);
	//if(zlazytalent.Authorization.isLogin()){		
	this.switchToPage('searchRolesPage');
	//}
	//else{
		//this.switchToPage('loginPage');
	//}
    },
    gotoProfile: function() {
	M.Logger.log("go to Profile", M.INFO, this.ON_LOG);
	//if(zlazytalent.Authorization.isLogin()){		
	this.switchToPage('profilePage');
	//}
	//else{
		//this.switchToPage('loginPage');
	//}
    },
    gotoProfileRecruiterPage: function() {
	M.Logger.log("go to Profile", M.INFO, this.ON_LOG);
	//if(zlazytalent.Authorization.isLogin()){		
	this.switchToPage('profileRecruiterPage');
	//}
	//else{
		//this.switchToPage('loginPage');
	//}
    },
    gotoSetting: function() {
	M.Logger.log("go to Setting", M.INFO, this.ON_LOG);
	//if(zlazytalent.Authorization.isLogin()){		
	this.switchToPage('settingPage');
	//}
	//else{
		//this.switchToPage('loginPage');
	//}
    },
    gotoMessages: function() {
	M.Logger.log("go to Messages", M.INFO, this.ON_LOG);
	//if(zlazytalent.Authorization.isLogin()){		
	this.switchToPage('messageInboxPage');
	//}
	//else{
		//this.switchToPage('loginPage');
	//}
    },
    gotoPage: function(id, nameId) {        
	var page = $("#"+id).find(".goto").html();
	if(page != null){
		M.Logger.log("go to "+ page, M.INFO, this.ON_LOG);
		//if(zlazytalent.Authorization.isLogin()){			
			this.switchToPage(page);
		//}
		//else{
			//this.switchToPage('loginPage');
		//}
	}
    },
    gotoWelcomePage: function() {
	M.Logger.log("go to WelcomePage", M.INFO, this.ON_LOG);
        //if(zlazytalent.Authorization.isLogin()){		
		this.switchToPage('welcomePage');
	//}
	//else{		
		//this.switchToPage('welcomePage');
	//}	
    },    
    gotoViewedPage: function() {
	M.Logger.log("go to viewedPage", M.INFO, this.ON_LOG);
        //if(zlazytalent.Authorization.isLogin()){		
		this.switchToPage('viewedPage');
	//}
	//else{		
		//this.switchToPage('welcomePage');
	//}	
    },
    gotoSignUpPage: function() {
	M.Logger.log("go to SignUpPage", M.INFO, this.ON_LOG);
        if(zlazytalent.Authorization.getRole() == L.RECRUITER){
		this.switchToPage('singupRecruitersProfile');
	}
	else if(zlazytalent.Authorization.getRole() == L.TALENT){
		this.switchToPage('singupTalentsProfile');
	}	
    },
    gotoCandidatesSearchPage: function() {
	M.Logger.log("go to CandidatesSearchPage", M.INFO, this.ON_LOG);
        //if(zlazytalent.Authorization.isLogin()){		
		this.switchToPage('candidatesSearchPage');
	//}
	//else{		
		//this.switchToPage('welcomePage');
	//}	
    },
    gotoCandidatesPage: function() {
	M.Logger.log("go to CandidatesPage", M.INFO, this.ON_LOG);
        //if(zlazytalent.Authorization.isLogin()){		
		this.switchToPage('candidatesPage');
	//}
	//else{		
		//this.switchToPage('welcomePage');
	//}	
    },
    gotoRolesRecruiter: function() {
	M.Logger.log("go to CandidatesPage", M.INFO, this.ON_LOG);
        //if(zlazytalent.Authorization.isLogin()){		
		this.switchToPage('rolesRecruiterPage');
	//}
	//else{		
		//this.switchToPage('welcomePage');
	//}	
    },
    gotoLandingPage: function() {
	M.Logger.log("go to LandingPage", M.INFO, this.ON_LOG);
        //if(zlazytalent.Authorization.isLogin()){		
		this.switchToPage('landingPage');
	//}
	//else{		
		//this.switchToPage('welcomePage');
	//}	
    },
    refreshPage:function() {
	location.reload();
    },
    goBackPage:function(){
	history.back(-1);
    }
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Config
// ==========================================================================

zlazytalent.Config = M.Controller.extend({

    appIdFb      : '505174969505776', // App ID from the App Dashboard
    channelUrlFb : '//127.0.0.1:8000/zlazytalent/index.html', // Channel File for x-domain communication

    init: function(isFirstLoad) {
        if(isFirstLoad) {
            
        }
        
    },

    
    

});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Authorization
// ==========================================================================

zlazytalent.Authorization = M.Controller.extend({

    /* property */
    ON_LOG 	: true ,
    username 	: '',
    password 	: '',
    /*
    * constructor
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
	    M.Logger.log("zlazytalent.Authorization first load", M.INFO, this.ON_LOG);
	    	    
        }
        /* do something, for any other load. */
	M.Logger.log("zlazytalent.Authorization load", M.INFO, this.ON_LOG);
    },

    /*
    * other method
    */
    loginBySite	:function(){
	this.getInfoFromWelcomePage();
	this.switchToPage('homeRecruiterPage');
    },
    loginByFacebook: function() {
	/**
				zlazytalent.USER.createRecord({
					leanToken		: access_token,
					id			: response.id,
					name			: response.name,
					first_name		: response.first_name,
					last_name		: response.last_name,
					link			: response.link,
					location		: response.location,
					favorite_teams		: response.favorite_teams,
					favorite_athletes	: response.favorite_athletes,
					gender			: response.gender,
					timezone		: response.timezone,
					locale			: response.locale,
					updated_time 		: response.updated_time	
					
				}).save();
				var userList = zlazytalent.USER.find();
	*/
	this.switchToPage('homeRecruiterPage');
    },
    loginByLinkedin: function() {
      /*
        M.DialogView.alert({
	    title: 'No Connection',
	    message: 'No Connection available. Request failed.',
	    confirmButtonValue: 'OK',
	    callbacks: {
		confirm: {
		    target: zlazytalent.MyController,
		    action: 'disconnect'
		}
	    }
	});
	*/
      this.switchToPage('homeTalentsPage');
    },
    isLogin: function() {
	var userList = zlazytalent.USER.find();
	var user     = userList[userList.length-1]; 
	if(!jQuery.isEmptyObject(user)){
		if(!user.get('leanToken')) {
			return false;
		}
		return true;
	}
        return false;
    },
    getFullName:function() {
	var userList = zlazytalent.USER.find();
	
	var user     = userList[userList.length-1]; 
	if(!jQuery.isEmptyObject(user)){
		var name = user.get('name');
		if(!name) {
			return null;
		}
		return name;
	}
        return null;
    },
    getLeanToken:function() {
	var userList = zlazytalent.USER.find();
	
	var user     = userList[userList.length-1]; 
	if(!jQuery.isEmptyObject(user)){
		var name = user.get('leanToken');
		if(!name) {
			return null;
		}
		return name;
	}
        return null;
    },
    getAvatar:function(type) {
	type = ((type != null) ? type : 'small');
	var userList = zlazytalent.USER.find();
	M.Logger.log("get avatar", M.INFO, this.ON_LOG);
	var user     = userList[userList.length-1]; 
	if(!jQuery.isEmptyObject(user)){
		var id = user.get('id');
		if(!id) {
			return null;
		}
		return 'https://graph.facebook.com/'+id+'/picture?type='+type;
	}
        return null;
    },
    logout:function() {
	/*
	var userList = zlazytalent.USER.find();
	
	var user     = userList[userList.length-1]; 
	if(!jQuery.isEmptyObject(user)){
		user.del();
		zlazytalent.PageManager.gotoHome();
	}
	*/
	zlazytalent.PageManager.gotoLandingPage();
    },
    /*
     * New
     */
    setRoleTalent: function() {
	var userList = zlazytalent.ACCOUNT.find();
	var user     = userList[userList.length-1];
	if(!jQuery.isEmptyObject(user)){
		user.set('role',L.TALENT);
		user.save();
	}else{
		this.createUser(L.TALENT);
	}
		
    },
    setRoleRecruiter: function (){
	var userList = zlazytalent.ACCOUNT.find();
	var user     = userList[userList.length-1];
	if(!jQuery.isEmptyObject(user)){
		user.set('role',L.RECRUITER);
		user.save()
	}else{
		this.createUser(L.RECRUITER);
	}
    },    
    getRole: function(){
	var userList = zlazytalent.ACCOUNT.find();
	var user     = userList[userList.length-1];
	if(!jQuery.isEmptyObject(user)){
	    return user.get('role');
	}
	else 
	    return null;
    },
    createUser:function(role) {
	 role = ((role != null) ? role : L.NONE);
	 zlazytalent.ACCOUNT.createRecord({
		role		: role,
	}).save();
    },
						
    updateUser:function(){},
    
    getInfoFromWelcomePage: function(){
	this.username = M.ViewManager.getView('welcomePage', 'username').getValue();
	this.password = M.ViewManager.getView('welcomePage', 'password').getValue();
	M.Logger.log("zlazytalent.Authorization username = "+ this.username + "| password = " + this.password, M.INFO, this.ON_LOG);
    }
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: SavedRoles
// ==========================================================================
//thanh

zlazytalent.SavedRoles = M.Controller.extend({

    /* sample controller property */
     listFunctions: null,

    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            this.set('listFunctions', [
		  {
		      name: "Role1",
		      image: 'theme/images/appicon.png',
		      content: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		      page: 'rolesImformationPage'
		  },{
		      name: "Role2",
		      image: 'theme/images/appicon.png',
		      content: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		      page: 'rolesImformationPage'
		  }
	      ]);
		   
        }
        /* do something, for any other load. */
		M.Logger.log("zlazytalent.SavedRoles load", M.INFO, this.ON_LOG);
    },
        
    

    /*
    * Example function, which shows how to switch to another page
    * Function is triggered by setting target & action in a view.
    */
    switchToExamplePage: function() {
        /* switch to a page called 'examplePage' */
        this.switchToPage('examplePage');
    }

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: SavedRoles_ItemsListitem
// ==========================================================================
//thanh

zlazytalent.SavedRoles_ItemsListitem = M.ListItemView.design({

    childViews: 'name image content page',
    events: {
        tap: {
            target: zlazytalent.SavedRoles,
            action:'listObjectClicked'
        },
	click:{
	    target: zlazytalent.PageManager,
	    action:'gotoPage'
	}
    },
	
    name: M.LabelView.design({
        valuePattern: ' <%= name%> ',
		cssClass: 'username'
    }),
    image: M.ImageView.design({
		valuePattern: ' <%= image%> ',
		cssClass: 'role-img'
    }),
    content: M.ScrollView.design({
		cssClass: 'main_content',
		childViews: 'main ', 			
	main: M.LabelView.design({
		valuePattern: '<%= content%>',
		cssClass: 'role_content text',
	}),

    }),
    page: M.LabelView.design({
        valuePattern: '<%= page%>',
		cssClass: 'goto display-none'
    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Candidates_ItemListitem
// ==========================================================================

zlazytalent.Candidates_ItemListitem = M.ListItemView.design({

    childViews: 'avatar name content',

    events: {
        tap: {
            target: zlazytalent.Candidates,
            action:'listObjectClicked'
		},
	},

    avatar: M.ImageView.design({
        valuePattern: '<%= avatar %>',
        cssClass: 'listThumb visitor-img'
    }),

    name : M.LabelView.design({
        valuePattern: '<%= name %>',
        cssClass: 'name username'
    }),

    content : M.LabelView.design({
        valuePattern: '<%= content %>',
        cssClass: 'content text'
    })

});
// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Signup_TalentsProfile
// ==========================================================================

zlazytalent.Signup_TalentsProfile = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.MyController,
            action: 'init'
        }
    },
    
    cssClass: '',

    childViews: ' content ',
   
    content: M.ScrollView.design({
      
      
	childViews: 'content',
	content: M.ContainerView.design({			 
		childViews: 'logo frame_content description',
		logo: M.LabelView.design({
			value: 'LAZY TALENT',
			cssClass: 'logo-text'
		}),
		label: M.LabelView.design({
			value: 'Step 3: Your Profile',
			cssClass: 'description',
			cssStyle: 'font-size: 1.2em;'
		}),
	
		frame_content: M.ContainerView.design({
			cssClass: 'ui-shadow ui-corner-all clear ui-listview',
			cssStyle:'margin: 10px auto;',
			childViews: 'la',    
			la: M.ContainerView.design({
				cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',      
				childViews: 'skillSet employmentStatus companySize careerSearchStatus education workAuthorization willingToAllocate button',
				skillSet: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Skill Sets',
					cssClass: ''
				}),
				employmentStatus: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Employment Status',
					cssClass: ''
				}),
				companySize: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Company Size',
					cssClass: ''
				}),
				careerSearchStatus: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Career Search Status',
					cssClass: ''
				}),
				education: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Education',
					cssClass: ''
				}),
				workAuthorization: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Work Authorization',
					cssClass: ''
				}),
				willingToAllocate: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Willing To Allocate (Y/N)',
					cssClass: ''
				}),
				button: M.ButtonView.design({
					value: 'Finish',
					cssClass: 'b',
					events: {
						tap: {
							target: zlazytalent.PageManager,
							action: 'gotoHome'
						}
					},
					dataTheme: 'b'
				})
        
        
			})
	
		}),
		description: M.LabelView.design({
			value: 'Copyright © 2013 Hitch Lab. All rights reserved',
			cssClass: 'description'
		}),
		cssClass:'box-welcome'
        
        })
        
    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Viewed_Listitem
// ==========================================================================

zlazytalent.Viewed_Listitem =M.ListItemView.design({

    childViews: 'avatar name time content',

    events: {
        tap: {
            target: zlazytalent.Viewed,
            action:'listObjectClicked'
		},
	},

    avatar: M.ImageView.design({
        valuePattern: '<%= avatar %>',
        cssClass: 'listThumb visitor-img'
    }),

    name : M.LabelView.design({
        valuePattern: '<%= name %>',
        cssClass: 'name username'
    }),

    time : M.LabelView.design({
        valuePattern: '<%= time %>',        
        cssClass: 'time date'
    }),

    content : M.LabelView.design({
        valuePattern: '<%= content %>',
        cssClass: 'content text'
    })

});
// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: WelcomePage
// ==========================================================================

zlazytalent.LandingPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Welcome,
            action: 'init'
        }
    },
    
    cssClass: 'LandingPage',

    childViews: 'content',

    
    content: M.ScrollView.design({
	childViews: ' content space_header b1 b2 b3 b4 b5 space_center1 ',
	content: M.ContainerView.design({			 
		childViews: 'logo',
		logo: M.LabelView.design({
			value: 'LAZY TALENT',
			cssClass: 'logo-text'
		}),
		cssClass:'box-welcome index-content'
	}),
	space_header: M.ContainerView.design({
            cssClass: 'space-header'
        }),
        b1: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	b2: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name bt',
			name: M.ImageView.design({
				value: 'theme/images/recruiter-avatar.png',
				cssClass: 'text inner-center-text ui-shadow ui-btn-corner-all',
				cssStyle:'width:100%;'
			}),
			bt:M.ButtonView.design({
				value: 'Recruiter',
				events: {
					tap: {
						target: zlazytalent.Welcome,
						action: 'selectRecruiter'
					},
					click: {
						target: zlazytalent.Welcome,
						action: 'selectRecruiter'
					}
				},
				dataTheme: 'b'
			}),
			cssClass: 'middle-center-text',
			cssStyle: 'top:0%;'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'none'
			}
		},
		cssStyle:'height:700px;'
        }),
	b3: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	b4: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name bt',
			name: M.ImageView.design({
				value: 'theme/images/talent-avatar.png',
				cssClass: 'text inner-center-text  ui-shadow ui-btn-corner-all',
				cssStyle:'width:100%;'
			}),
			bt:M.ButtonView.design({
				value: 'Talent',
				events: {
					tap: {
						target: zlazytalent.Welcome,
						action: 'selectTalent'
					},
					click: {
						target: zlazytalent.Welcome,
						action: 'selectTalent'
					}
				},
				dataTheme: 'b'
			}),
			cssClass: 'middle-center-text',
			cssStyle: 'top:0%;'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'none'
			}
		},
		cssStyle:'height:700px;'
        }),
	b5: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	space_center1: M.ContainerView.design({
            cssClass: 'space-center'
        })
    })

    

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Roles_TabView
// ==========================================================================
//thanh

zlazytalent.Roles_TabView = M.TabBarView.design({

    childViews: 'searchRole savedRole',    

    transition: M.TRANSITION.NONE,

    name: 'tabs',

    searchRole: M.TabBarItemView.design({

        value: 'Search Roles',
        page: 'searchRolesPage',        
        isActive: YES,	
      
    }),

    savedRole: M.TabBarItemView.design({

        value: 'Saved Roles',
        page: 'savedRolesPage',     
	
    }),

    						  
    cssClass: 'navbar-tabview'


});
// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Footer_ToolbarView
// ==========================================================================

zlazytalent.Footer_ToolbarView = M.ToolbarView.design({
        childViews: 'content',
        content: M.ContainerView.design({
		cssClass: 'footer_content',
		childViews: 'credits',
		
		credits: M.LabelView.design({
			value: 'Z DEMO LAZY TALENT Z<br/>Copyright © 2013 Hitch Lab. All rights reserved.',
			cssClass: 'credits'
		}),
		anchorLocation: M.CENTER
	}),
        anchorLocation: M.BOTTOM
});
// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Profile_SkillListitem
// ==========================================================================

zlazytalent.Profile_SkillListitem = M.ListItemView.design({
    childViews: 'name',
    events: {
        tap: {
            target: zlazytalent.Profile,
            action:'removeSkillDialog'
        }
    },
    name: M.LabelView.design({
        valuePattern: ' <%= name %> ',
	cssClass: 'skill name'
    })
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Home_FunctionsListitem
// ==========================================================================

zlazytalent.Home_FunctionsListitem = M.ListItemView.design({
    childViews: 'name page',
    events: {
        tap: {
            target: zlazytalent.PageManager,
            action:'gotoPage'
        },
	click:{
	    target: zlazytalent.PageManager,
            action:'gotoPage'
	}
    },
    name: M.LabelView.design({
        valuePattern: ' <%= name%> ',
	cssClass: ''
    }),
    page: M.LabelView.design({
        valuePattern: '<%= page%>',
	cssClass: 'goto display-none'
    }),
    cssClass: 'ui-btn-up-m'
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Home
// ==========================================================================
m_require('app/views/Home_FunctionsListitem.js');
zlazytalent.HomePage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.MyHome,
            action: 'init'
        }
    },
    
    cssClass: 'Home',

    childViews: 'header content footer',

    header: M.ToolbarView.design({
        showBackButton: YES,
        childViews: 'label right',
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'WELCOME TO LAZY TALENT',
		cssClass: 'label-page'
	}),
	
	right:M.ContainerView.design({
		anchorLocation: M.RIGHT,
		childViews: 'back_button',
		back_button: M.ContainerView.design({
			cssClass: 'logout-button',
			childViews: 'avatar label',
			avatar:M.ImageView.design({
				value: zlazytalent.Authorization.getAvatar(),
				cssClass: 'avatar'
			}),
			label: M.LabelView.design({
				value: zlazytalent.Authorization.getFullName(),
				cssClass: 'name'
			}),
			events: {
				tap: {
					target: zlazytalent.MyHome,
					action: 'logoutDialog'
				}
			}
		})
	}),
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'functions lg_button',        
	functions: M.ListView.design({
		listItemTemplateView: zlazytalent.Home_FunctionsListitem,
		contentBinding: {
			target: zlazytalent.MyHome,
			property: 'listFunctions'
		},
		idName: 'name',
		cssClass: 'home-functions ui-shadow ui-corner-all clear'
	}),
	lg_button: M.ButtonView.design({
		value: 'Logout',
		events: {
			tap: {
				target: zlazytalent.Authorization,
				action: 'doNothing'
			}
		},
		dataTheme: 'b'
	})  
    }),

    footer: M.ToolbarView.design({
        childViews: 'content',
        content: M.ContainerView.design({
		cssClass: 'footer_content',
		childViews: ' main credits',
		
		main: M.ContainerView.design({
			cssClass: 'main'
		}),
		credits: M.LabelView.design({
			value: 'DEMO LAZY TALENT.<br/>Copyright © 2012 Hitch Lab. All rights reserved.',
			cssClass: 'credits'
		}),
		anchorLocation: M.CENTER
	}),
        anchorLocation: M.BOTTOM
    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: CreateRolesContainerView
// Description :
//		Template cho trang tao roles
// ==========================================================================

zlazytalent.CreateRolesContainerView =  M.ContainerView.design({
	cssClass: 'ui-shadow ui-corner-all clear ui-listview',
	cssStyle: 'margin: 10px auto;',   
	childViews: 'la',   
	la: M.ContainerView.design({
		cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',       
		
		childViews: 'skillSets company offer button',
		skillSets: M.TextFieldView.design({
			hasMultipleLines: NO,
			initialText: 'Requirement Skillsets',
			cssClass: ''
		}),
		
		company: M.TextFieldView.design({
			hasMultipleLines: NO,
			initialText: 'What is the Company ',
			cssClass: ''
		}),
		offer: M.TextFieldView.design({
			hasMultipleLines: NO,
			initialText: 'What do we offer',
			cssClass: ''
		}),
		button: M.ButtonView.design({
			value: 'Finish',
			cssClass: '',
			dataTheme: 'b'
		})    
		
	})
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Signup_CreateRolesPage
// ==========================================================================

m_require('app/views/CreateRolesContainerView.js');
zlazytalent.Signup_CreateRolesPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.MyController,
            action: 'init'
        }
    },
    
    cssClass: 'Signup_CreateRolesPage',

    childViews: 'content',

    content: M.ScrollView.design({
	
	childViews: 'content',
	content: M.ContainerView.design({			 
		childViews: 'logo frame_content description',
		logo: M.LabelView.design({
			value: 'LAZY TALENT',
			cssClass: 'logo-text'
		}),
		label: M.LabelView.design({
			value: 'Step 4: Create Your Roles',
			cssClass: 'description',
			cssStyle: 'font-size: 1.2em;'
		}),  
      
		frame_content:M.ContainerView.design({
			cssClass: 'ui-shadow ui-corner-all clear ui-listview',
			cssStyle: 'margin: 10px auto;',   
			childViews: 'la',   
			la: M.ContainerView.design({
				cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',       
				
				childViews: 'skillSets company offer button',
				skillSets: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Requirement Skillsets',
					cssClass: ''
				}),
				
				company: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'What is the Company ',
					cssClass: ''
				}),
				offer: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'What do we offer',
					cssClass: ''
				}),
				button: M.ButtonView.design({
					value: 'Finish',
					cssClass: 'b',
					events: {
						tap: {
							target: zlazytalent.PageManager,
							action: 'gotoHome'
						}
					},
					dataTheme: 'b'
				})   
				
			})
		}),
		description: M.LabelView.design({
			value: 'Copyright © 2013 Hitch Lab. All rights reserved',
			cssClass: 'description'
		}),
		cssClass:'box-welcome'
        
        })
    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Roles_RecruiterListitem
// ==========================================================================
//thanh

zlazytalent.Roles_RecruiterListitem = M.ListItemView.design({

   	childViews: 'header content',
    events: {
        
    },
    header:M.ContainerView.design ({
	childViews: 'label star',
	label: M.LabelView.design({
	    valuePattern: ' <%= label%> ',
	    cssClass: '',
	    cssStyle:'float:left;'
	}),
	star: M.LabelView.design({
	    value: '',
	    cssClass: 'star',
	    cssStyle:'float:left;margin-left:30px;'
	}),
	cssStyle:'display:inline-block;'
    }),
    content: M.ContainerView.design ({
		childViews: '',
		cssClass:'list-roles',		
		cssStyle:"overflow-x:auto;white-space:nowrap;",
    }),
    cssClass: 'item'
});




// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Setting_ItemListitem
// ==========================================================================

zlazytalent.Setting_ItemListitem = M.ListItemView.design({
    childViews: 'name page',
    events: {
        tap: {
            target: zlazytalent.MyHome,
            action:'listObjectClicked'
        },
	click:{
	    target: zlazytalent.PageManager,
            action:'gotoPage'
	}
    },
    name: M.LabelView.design({
        valuePattern: '<%= name%> ',
	cssClass: ''
    }),
    page: M.LabelView.design({
        valuePattern: '<%= page%>',
	cssClass: 'goto display-none'
    }),
    cssClass: 'ui-btn-up-m'
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Template01_ListView
// Description :
//		Template cho list view loai 1
// ==========================================================================

zlazytalent.Template01_ListView = M.ListItemView.design({

    childViews: 'avatar name time content',

    events: {
        tap: {
            target: zlazytalent.Visitors,
            action: 'showUser'
        }
    },

    avatar: M.ImageView.design({
        valuePattern: '<%= avatar %>',
        cssClass: 'listThumb visitor-img'
    }),

    name : M.LabelView.design({
        valuePattern: '<%= name %>',
        cssClass: 'name username'
    }),

    time : M.LabelView.design({
        valuePattern: '<%= time %>',        
        cssClass: 'time date'
    }),

    content : M.LabelView.design({
        valuePattern: '<%= content %>',
        cssClass: 'content text'
    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Header_ToolbarView
// ==========================================================================

zlazytalent.Header_ToolbarView = M.ToolbarView.design({
	
        childViews: 'label',
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'HOME',
		cssClass: 'label-page'
	}),
	
	left:M.ContainerView.design({
		anchorLocation: M.LEFT,
		childViews: 'back_button',
		back_button: M.ContainerView.design({
			cssClass: 'back-button',
			childViews: 'img',
			img: M.ImageView.design({
				value: 'theme/images/arrow_l_w.png',
				cssClass: ''
			}),
			events: {
				click: {
					target: zlazytalent.PageManager,
					action: 'goBackPage'
				},
				tap: {
					target: zlazytalent.PageManager,
					action: 'goBackPage'
				}
			}
		})
	}),
	right:M.ContainerView.design({
		anchorLocation: M.RIGHT,
		childViews: 'back_button',
		back_button: M.ContainerView.design({
			cssClass: 'logout-button',
			childViews: 'avatar label',
			avatar:M.ImageView.design({
				value: 'theme/images/100812_manager.jpg',
				cssClass: 'avatar'
			}),
			label: M.LabelView.design({
				value: 'John Mayer',
				cssClass: 'name'
			}),
			events: {
				tap: {
					target: zlazytalent.MyHome,
					action: 'logoutDialog'
				}
			}
		})
	}),
	
	showBackButton: YES,
        anchorLocation: M.TOP
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Home_TalentsPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Home_FunctionsListitem.js');
zlazytalent.Home_TalentsPage = M.PageView.design({

   /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.MyHome,
            action: 'init'
        }
    },
    
    cssClass: 'Home_TalentsPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	showBackButton: NO,    
    }),

    content: M.ScrollView.design({
	
        childViews: 'functions lg_button',        
	functions: M.ListView.design({
		listItemTemplateView: zlazytalent.Home_FunctionsListitem,
		contentBinding: {
			target: zlazytalent.MyHome,
			property: 'listTalentFunctions'
		},
		idName: 'name',
		cssClass: 'home-functions ui-shadow ui-corner-all clear'
	}),
	lg_button: M.ButtonView.design({
		value: 'Logout',
		events: {
			tap: {
				target: zlazytalent.Authorization,
				action: 'logout'
			}
		},
		dataTheme: 'b'
	}),
	/**
	cssClass: 'index-content',
        childViews: 'space_header b1 b2 b3 b4 b5 space_center1 b6 b7 b8 b9 b10 space_center2',
	space_header: M.ContainerView.design({
            cssClass: 'space-header'
        }),
	b1: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	b2: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Roles',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoSearchRoles'
			}
		}
        }),
	b3: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	b4: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Profile',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoProfile'
			}
		}
        }),
	b5: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	space_center1: M.ContainerView.design({
            cssClass: 'space-center'
        }),
	b6: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	
	b12: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Setting',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoSetting'
			}
		}
        }),
	
	b8: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	b7: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Messages',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoMessages'
			}
		}
	}),
	b10: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	space_center2: M.ContainerView.design({
            cssClass: 'space-center'
        }),
	b9: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Viewed',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoViewedPage'
			}
		}
	}),
	*/
    }),	

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});



// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: SearchRololesPage
// ==========================================================================
//thanh

m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Roles_TabView.js');
zlazytalent.SearchRolesPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {			
		pageshow: {
			target: zlazytalent.Roles,
			action: 'setSearchRolesActiveTab'
		}
    },
    
    cssClass: 'SearchRololesPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
		label: M.LabelView.design({
			anchorLocation: M.CENTER,
			value: 'Search Roles Page',
			cssClass: 'label-page'
		})
    }),

    content: M.ScrollView.design({
		childViews: 'tabview search_form',
		
		tabview: zlazytalent.Roles_TabView,
		
		search_form:M.FormView.design({
				childViews: 'senior_developer skills locations search',
				cssClass:'content-tabview',
				senior_developer: M.SearchBarView.design({
					initialText: 'Senior Developer',
					cssClassOnInit: 'senior_developer'
				}),
				skills: M.SearchBarView.design({
					initialText: 'Skills',
					cssClassOnInit: 'skills'
				}),
				locations: M.SearchBarView.design({
					initialText: 'Locations',
					cssClassOnInit: 'locations'
				}),
				search: M.ButtonView.design({
					value: 'Search',
					cssClass: 'b',
					events: {
						tap: {
							target: zlazytalent.PageManager,
							action: 'gotoRoles'
						}
					}
				})
				
		})			
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Roles_RecruiterPage
// ==========================================================================
//thanh
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Roles_RecruiterListitem.js');
zlazytalent.Roles_RecruiterPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Roles,
            action: 'loadRolesRecruiter'
        }
    },
    
    cssClass: 'Roles_RecruiterPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
    	label: M.LabelView.design({
    		anchorLocation: M.CENTER,
    		value: 'Roles',
    		cssClass: 'label-page'
    	})
    }),

    content: M.ScrollView.design({
        childViews: 'list1 bt_add',
        list1: M.ListView.design({
            contentBinding: {
                target: zlazytalent.Roles,
                property: 'listRecruiterRoles'
            },
            listItemTemplateView: zlazytalent.Roles_RecruiterListitem,
            removeItemsOnUpdate: YES,
		    cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview roles-recruiter-listitem'
        }),
	    bt_add: M.ButtonView.design({
            events: {
                tap: {
                    target: zlazytalent.Roles,
                    action: 'loadRolesRecruiterView'
                }
            },
    		value: 'Add More Roles',
    		cssClass: 'b',
    		icon: 'plus'
    	}),
        cssClass:"content-list-roles"
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Profile_RecruiterPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

zlazytalent.Profile_RecruiterPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Profile,
            action: 'init'
        }
    },
    
    cssClass: 'ProfilePage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	childViews: 'label right',
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'PROFILE',
		cssClass: 'label-page'
	}),
	right:M.ContainerView.design({
		anchorLocation: M.RIGHT,
		childViews: 'save_button',
		save_button: M.ButtonView.design({
			value: 'Save(none)',
			icon: 'check',
			events: {
				tap: {
					target: zlazytalent.Profile,
					action: 'none'
				}
			}
		})
	})
	
    }),

    content: M.ScrollView.design({
        childViews: 'frame_content',
	
	frame_content: M.ContainerView.design({
		cssClass: 'home-functions ui-shadow ui-corner-all clear ui-listview last-ui-item',
		childViews: 'la',				   
		la: M.ContainerView.design({
			cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',
			childViews: 'info about_me contact',   
			info:M.ContainerView.design({
				cssClass: 'profile-header',
				childViews: 'img info',
				img:M.ImageView.design({
				    value: 'theme/images/100812_manager.jpg',
				    cssClass: 'avatar'
				}),
				info: M.ContainerView.design({
				    cssClass: 'info',
				    childViews: 'name star bt_setting',  
				    name: M.LabelView.design({
					value: 'John Mayer',
					cssStyle:'font-size: 20px;'
				    }),
				    star: M.LabelView.design({
					value: '<div class="star"></div>',  
				    }),
				    bt_setting:M.ButtonView.design({
					value: 'Edit Setting',
					icon: 'gear',
					dataTheme: 'b',
					cssStyle:'',
					events: {
						tap: {
							target: zlazytalent.PageManager,
							action: 'gotoSetting'
						}
					}
				    })
				})  
			}),   
			about_me: M.ContainerView.design({
				childViews: 'title p',
				title:M.Element.design({
					e:'h2',
					cssClass: 'ui-li',
					cssStyle:' margin: .5em 0 .5em;font-size: 26px;text-transform: uppercase;font-weight: normal;line-height: 1.125; ',
					attribute: {
						'name':'Le Nam'
					},
					value:'About Me'
				}),
				p:M.Element.design({
					e:'p',
					cssClass: 'ui-li',
					cssStyle:'font-weight: normal;',
					attribute: {
					},
					value:'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				}),
				cssStyle:'clear:both;'
			}),
			contact: M.ContainerView.design({
				childViews: 'title p bt_facebook bt_linkedin bt_phone',
				title:M.Element.design({
					e:'h2',
					cssClass: 'ui-li',
					cssStyle:' margin:  .5em 0 .5em;font-size: 26px;text-transform: uppercase;font-weight: normal;line-height: 1.125; ',
					attribute: {
						'name':'Le Nam'
					},
					value:'Contact Information'
				}),
				p:M.Element.design({
					e:'p',
					cssClass: 'ui-li',
					cssStyle:'font-weight: normal;',
					attribute: {
					},
					value:'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				}),
				bt_facebook: M.ContainerView.design({
					childViews: 'icon link',
					icon:M.ImageView.design({
						value: 'theme/images/facebook_icon.png',
						cssClass: '',
						cssStyle:'width:40px;height:40px;float:left;background:white;'
					}),
					link:M.LabelView.design({
						value: 'www.facebook.com/hoangdov',
						cssClass: '',
						hyperlinkTarget: 'http://www.facebook.com/hoangdov',
						hyperlinkType: M.HYPERLINK_WEBSITE,
						cssStyle: 'height:20px;text-align:center;float:left;padding:10px;font-size: 20px;font-weight: bold;display: inline-block;'
					}),
					cssStyle:'clear:both;margin:10px 0 10px 0;overflow:hidden;cursor:pointer;background:white;overflow:hidden;'
				}),
				bt_linkedin: M.ContainerView.design({
					childViews: 'icon link',
					icon:M.ImageView.design({
						value: 'theme/images/linkedin_icon.jpg',
						cssClass: '',
						cssStyle:'width:40px;height:40px;float:left;background:white;'
					}),
					link:M.LabelView.design({
						value: 'www.linkedin.com/hoangdov',
						cssClass: '',
						hyperlinkTarget: 'http:/www.linkedin.com/hoangdov',
						hyperlinkType: M.HYPERLINK_WEBSITE,
						cssStyle: 'height:20px;text-align:center;float:left;padding:10px;font-size: 20px;font-weight: bold;display: inline-block;'
					}),
					cssStyle:'clear:both;margin:0 0 10px 0;overflow:hidden;cursor:pointer;background:white;overflow:hidden;'
				}),
				bt_phone: M.ContainerView.design({
					childViews: 'icon link',
					icon:M.ImageView.design({
						value: 'theme/images/phone_icon.png',
						cssClass: '',
						cssStyle:'width:40px;height:40px;float:left;background:white;'
					}),
					link:M.LabelView.design({
						value: '065-799-3174',
						cssClass: '',
						cssStyle: 'height:20px;text-align:center;float:left;padding:10px;font-size: 20px;font-weight: bold;display: inline-block;'
					}),
					cssStyle:'clear:both;margin:0 0 10px 0;overflow:hidden;cursor:pointer;background:white;overflow:hidden;'
				}),
		
			}),
			
		})
	})
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()


});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: CandidatesPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Candidates_ItemListitem.js');
zlazytalent.CandidatesPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Candidates,
            action: 'loadData'
        }
    },
    
    cssClass: 'CandidatesPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'Candidates',
		cssClass: 'label-page'
	})
    }),

    content: M.ScrollView.design({
        childViews: 'list_viewed',
        list_viewed: M.ListView.design({
		listItemTemplateView: zlazytalent.Candidates_ItemListitem.design({
			events: {
				tap: {
					target: zlazytalent.Candidates,
					action: 'gotoSingleCandidate'
				}
			}
		}),
		contentBinding: {
			target: zlazytalent.Candidates,
			property: 'listCandidates'
		},              
                removeItemsOnUpdate: NO,
		cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
        }),
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: ProfilePage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Profile_SkillListitem.js');
zlazytalent.ProfilePage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
	pageshow: {
            target: zlazytalent.Profile,
            action: 'init'
        }
    },
    
    cssClass: 'ProfilePage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	childViews: 'label right',
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'PROFILE',
		cssClass: 'label-page'
	}),
	right:M.ContainerView.design({
		anchorLocation: M.RIGHT,
		childViews: 'save_button',
		save_button: M.ButtonView.design({
			value: 'Save',
			icon: 'check',
			events: {
				tap: {
					target: zlazytalent.Profile,
					action: 'saveDialog'
				}
			}
		})
	})
	
    }),

    content: M.ScrollView.design({
        childViews: 'frame_content',
	
	frame_content: M.ContainerView.design({
		cssClass: 'home-functions ui-shadow ui-corner-all clear ui-listview last-ui-item',
		childViews: 'la',				   
		la: M.ContainerView.design({
			cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',
			childViews: 'info select1 select2 select3 select4 select5 select6 select7',   
			info:M.ContainerView.design({
				cssClass: 'profile-header',
				childViews: 'img info',
				img:M.ImageView.design({
				    value: 'theme/images/100812_manager.jpg',
				    cssClass: 'avatar',
				    cssStyle: ''
				}),
				info: M.ContainerView.design({
				    cssClass: 'info',
				    childViews: 'name star bt_setting',  
				    name: M.LabelView.design({
					value: 'John Mayer',
					cssStyle:'font-size: 20px;'
				    }),
				    star: M.LabelView.design({
					value: '<div class="star"></div>',  
				    }),
				    bt_setting:M.ButtonView.design({
					value: 'Edit Setting',
					icon: 'gear',
					dataTheme: 'b',
					cssStyle:'',
					events: {
						tap: {
							target: zlazytalent.PageManager,
							action: 'gotoSetting'
						}
					}
				    })
				})  
			}),
			select1: M.ContainerView.design({
				childViews: 'label list_skill select_skill',
				label: M.LabelView.design({
					value: 'I am really good at',  
				}),
				list_skill: M.ListView.design({
					listItemTemplateView: zlazytalent.Profile_SkillListitem,
					contentBinding: {
						target: zlazytalent.Profile,
						property: 'skills'
					},
					idName: 'name',
					cssClass: 'home-functions ui-shadow ui-corner-all clear'
				}),
				select_skill: M.SelectionListView.design({	
					cssClass: 'ui-li',
					childViews: 'item1 item2 item3',
					selectionMode: M.SINGLE_SELECTION_DIALOG ,
					item1: M.SelectionListItemView.design({
						value: 'JavaScript',
						label: 'JavaScript',
						isSelected: YES
					}),
					item2: M.SelectionListItemView.design({
						value: 'Java',
						label: 'Java'
					}),
					item3: M.SelectionListItemView.design({
						value: 'CSS3',
						label: 'CSS 3'
					}),
					events: {
						change:{
							target: zlazytalent.Profile,
							action: 'addSkillDialog'
						}
					}
				}),
				cssStyle: 'clear:both;'
			}),
			/*   
			select1: M.SelectionListView.design({	
				cssClass: 'ui-li',
				childViews: 'item1 item2 item3',
				selectionMode: M.SINGLE_SELECTION_DIALOG ,
				label: 'I am really good at',
				item1: M.SelectionListItemView.design({
					value: 'skill1',
					label: 'Skill 1',
					isSelected: YES
				}),
				item2: M.SelectionListItemView.design({
					value: 'skill2',
					label: 'Skill 2',
					isSelected: YES
				}),
				item3: M.SelectionListItemView.design({
					value: 'skill3',
					label: 'Skill 3'
				})
			}),
			*/
			select2: M.SelectionListView.design({	
				cssClass: 'ui-li',
				childViews: 'item1 item2',
				/* renders a selection view like radio buttons */
				selectionMode: M.SINGLE_SELECTION_DIALOG ,
				label: 'Employment status',
				item1: M.SelectionListItemView.design({
					value: 'employed',
					label: 'Employed',
					isSelected: YES
				}),
				item2: M.SelectionListItemView.design({
					value: 'unemployed',
					label: 'Unemployed'
				})
			}),
			select3: M.SelectionListView.design({	
				cssClass: 'ui-li',
				childViews: 'item1 item2 item3',
				/* renders a selection view like radio buttons */
				selectionMode: M.SINGLE_SELECTION_DIALOG ,			
				label: 'Company Size',
				item1: M.SelectionListItemView.design({
					value: 'small',
					label: 'Small ( < 50)',
					isSelected: YES
				}),
				item2: M.SelectionListItemView.design({
					value: 'medium',
					label: 'Medium ( 50 - 500)'
				}),
				item3: M.SelectionListItemView.design({
					value: 'large',
					label: 'Large ( > 500)'
				})
			}),
			select4: M.SelectionListView.design({	
				cssClass: 'ui-li',
				childViews: 'item1 item2 item3',
				/* renders a selection view like radio buttons */
				selectionMode: M.SINGLE_SELECTION_DIALOG ,			
				label: 'Career Search Status',
				item1: M.SelectionListItemView.design({
					value: 'justchecking',
					label: 'Just Checking',
					isSelected: YES
				}),
				item2: M.SelectionListItemView.design({
					value: 'opentoopportunities',
					label: 'Open to opportunities'
				}),
				item3: M.SelectionListItemView.design({
					value: 'seriouslylooking',
					label: 'Seriously Looking'
				})
			}),
			select5: M.SelectionListView.design({	
				cssClass: 'ui-li',
				childViews: 'item1 item2 item3 item4',
				/* renders a selection view like radio buttons */
				selectionMode: M.SINGLE_SELECTION_DIALOG ,			
				label: 'Highest Education Level',
				item1: M.SelectionListItemView.design({
					value: 'highschool',
					label: 'Highschool',
					isSelected: YES
				}),
				item2: M.SelectionListItemView.design({
					value: 'somecollege',
					label: 'Some College'
				}),
				item3: M.SelectionListItemView.design({
					value: 'bachelor',
					label: 'Bachelor'
				}),
				item4: M.SelectionListItemView.design({
					value: 'graduateschoolpostgraduate',
					label: 'Graduate School. Post-Graduate'
				})
			}),
			select6: M.SelectionListView.design({	
				cssClass: 'ui-li',
				childViews: 'item1 item2',
				/* renders a selection view like radio buttons */
				selectionMode: M.SINGLE_SELECTION_DIALOG ,
				label: 'Are you legally eligible to work in US?',
				item1: M.SelectionListItemView.design({
					value: 1,
					label: 'Yes',
					isSelected: YES
				}),
				item2: M.SelectionListItemView.design({
					value: 0,
					label: 'No'
				})
			}),		   
			select7: M.SelectionListView.design({	
				cssClass: 'ui-li',
				childViews: 'item1 item2',
				/* renders a selection view like radio buttons */
				selectionMode: M.SINGLE_SELECTION_DIALOG ,			
				label: 'Willing to allocate',
				item1: M.SelectionListItemView.design({
					value: 1,
					label: 'Yes',
					isSelected: YES
				}),
				item2: M.SelectionListItemView.design({
					value: 0,
					label: 'No'
				})
			})	   
		})
	})
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()


});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: RatingPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

zlazytalent.RatingPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.MyController,
            action: 'init'
        }
    },
    
    cssClass: 'RatingPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	childViews: 'label',
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'RATING',
		cssClass: 'label-page'
	})	
    }),

    content: M.ScrollView.design({
        childViews: 'label',
        label: M.LabelView.design({
            value: 'RatingPage'
        })
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: RolesIformationPage
// ==========================================================================
//thanh
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

zlazytalent.RolesIformationPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.MyController,
            action: 'init'
        }
    },
    
    cssClass: '',

    childViews: 'header content footer',

   header: zlazytalent.Header_ToolbarView.cloneThisObject({
		label: M.LabelView.design({
			anchorLocation: M.CENTER,
			value: 'Roles Information Page',
			cssClass: 'label-page'
		})
    }),
    content: M.ScrollView.design({
       childViews: 'frame_content',
	
	frame_content: M.ContainerView.design({
		cssClass: 'home-functions ui-shadow ui-corner-all clear ui-listview last-ui-item',
		childViews: 'la',				   
		la: M.ContainerView.design({
			cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',
			childViews: 'info  information',   
			info:M.ContainerView.design({
				cssClass: 'profile-header',
				childViews: 'img name star',
				img:M.ImageView.design({
				    value: zlazytalent.Authorization.getAvatar('large'),
				    cssClass: 'avatar'
				}),
				name: M.LabelView.design({
				    value: zlazytalent.Authorization.getFullName()+'<div class="score"></div>',
				    cssClass: 'info'
				})
			}),
			information: M.LabelView.design({
				value: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis modtincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam corper suscipit lobortisnisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
				cssClass: 'role-information-bottom'
			})
		})
	}),
      
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});



// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Viewed_ViewPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

zlazytalent.Viewed_ViewPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Viewed,
            action: 'viewViewedViewPage'
        }
    },
    
    cssClass: 'Viewed_ViewPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
		label: M.LabelView.design({
			anchorLocation: M.CENTER,
			value: 'Information Recruiter',
			cssClass: 'label-page'
		})
	}),

    content: M.ScrollView.design({
        childViews: 'content',
        
		content: M.ContainerView.design({
			childViews: 'la',				   
			la: M.ContainerView.design({
				cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',
				childViews: 'info content',
				info:M.ContainerView.design({
					cssClass: 'profile-header',
					childViews: 'img name star',
					img:M.ImageView.design({
						computedValue: {
							contentBinding: {
								target: zlazytalent.Viewed,
								property: 'viewed'
							},
							operation: function(v) {
								if(v) {
								return v.get('avatar');
								}
							}
						},
						cssClass: 'avatar'
					}),
					name: M.LabelView.design({
						computedValue: {
							contentBinding: {
								target: zlazytalent.Viewed,
								property: 'viewed'
							},
							operation: function(v) {
								if(v) {
								return v.get('name');
								}
							}
						},
						cssClass: 'info'
					})
				}),
				content:M.LabelView.design({
					computedValue: {
						contentBinding: {
							target: zlazytalent.Viewed,
							property: 'viewed'
						},
						operation: function(v) {
							if(v) {
							return v.get('content');
							}
						}
					},
					cssClass: 'info',
					cssStyle: 'font-weight: normal;color:black;'
				})
			}),
			cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
		}),
		
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Candidates_ViewPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

zlazytalent.Candidates_ViewPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    
    events: {
        pageshow: {
            target: zlazytalent.Candidates,
            action: 'viewCandidatesViewPage'
        }
    },
    
    
    cssClass: 'Candidates_ViewPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
		label: M.LabelView.design({
			anchorLocation: M.CENTER,
			value: 'Your Saved Candidates',
			cssClass: 'label-page'
		})
	}),

    content: M.ScrollView.design({
        childViews: 'content',
        
		content: M.ContainerView.design({
			childViews: 'la',				   
			la: M.ContainerView.design({
				cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',
				childViews: 'info content',
				info:M.ContainerView.design({
					cssClass: 'profile-header',
					childViews: 'img name star',
					img:M.ImageView.design({
						computedValue: {
							contentBinding: {
								target: zlazytalent.Candidates,
								property: 'candidates'
							},
							operation: function(v) {
								if(v) {
								return v.get('avatar');
								}
							}
						},
						cssClass: 'avatar'
					}),
					name: M.LabelView.design({
						computedValue: {
							contentBinding: {
								target: zlazytalent.Candidates,
								property: 'candidates'
							},
							operation: function(v) {
								if(v) {
								return v.get('name');
								}
							}
						},
						cssClass: 'info'
					})
				}),
				content:M.LabelView.design({
					computedValue: {
						contentBinding: {
							target: zlazytalent.Candidates,
							property: 'candidates'
						},
						operation: function(v) {
							if(v) {
							return v.get('content');
							}
						}
					},
					cssClass: 'info',
					cssStyle: 'font-weight: normal;color:black;clear:both;'
				})
			}),
			cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
		}),
		
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: ViewedPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Viewed_Listitem.js');
zlazytalent.ViewedPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Viewed,
            action: 'init'
        }
    },
    
    cssClass: 'ViewedPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	childViews: 'label',
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'VIEWED',
		cssClass: 'label-page'
	})	
    }),

    content: M.ScrollView.design({
		
        childViews: 'list_viewed',
        list_viewed: M.ListView.design({
				listItemTemplateView: zlazytalent.Viewed_Listitem.design({
					events: {
					  tap: {
						target: zlazytalent.Viewed,
						action: 'gotoViewedViewPage'
					  }
					}
				}),
				contentBinding: {
					target: zlazytalent.Viewed,
					property: 'listViewed'						
				},              
                removeItemsOnUpdate: NO,
				cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
        }),
    }),

     footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: SettingPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Setting_ItemListitem.js');
zlazytalent.SettingPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Setting,
            action: 'init'
        }
    },
    
    cssClass: 'SettingPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	childViews: 'label right',
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'SETTINGS',
		cssClass: 'label-page'
	}),
	right:M.ContainerView.design({
		anchorLocation: M.RIGHT,
		childViews: 'save_button',
		save_button: M.ButtonView.design({
			value: 'Save(none)',
			icon: 'check',
			events: {
				tap: {
					target: zlazytalent.Profile,
					action: 'none'
				}
			}
		})
	})
    }),
    
    content: M.ScrollView.design({
        childViews: 'default_settings last_ui_item_pn about_label about_settings debug_label debug_settings last_ui_item_db',
	default_settings: M.ListView.design({
		listItemTemplateView: zlazytalent.Setting_ItemListitem,
		contentBinding: {
			target: zlazytalent.Setting,
			property: 'listItemDefault'
		},
		idName: '',
		cssClass: 'home-functions ui-shadow ui-corner-top clear'
	}),
	last_ui_item_pn: M.ContainerView.design({
		cssClass: 'home-functions ui-shadow ui-corner-bottom clear ui-listview last-ui-item',
		childViews: 'la',				   
		la: M.ContainerView.design({
			cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c',
			childViews: 'push_notification_switch',
			push_notification_switch:M.ToggleSwitchView.design({
			    label: 'Push Notification',
			    isMini: NO,
			    onLabel: 'ON',
			    offLabel: 'OFF',
			    offValue: 0,
			    onValue: 1,
			    isInline: YES,
			    cssClass:'lang',
			    events:{
				change:{
				    action: function(){
					console.log('change push_notification');
				    }
				}
			    }
			}),
		})
	}),
	
	about_label: M.LabelView.design({
            value: 'About',
	    cssClass:'clear h1-style'
        }),
	about_settings: M.ListView.design({
		listItemTemplateView: zlazytalent.Setting_ItemListitem,
		contentBinding: {
			target: zlazytalent.Setting,
			property: 'listItemAbout'
		},
		idName: '',
		cssClass: 'home-functions ui-shadow ui-corner-all clear'
	}),
	debug_label: M.LabelView.design({
            value: 'Debug',
	    cssClass:'clear h1-style'
        }),
	debug_settings: M.ListView.design({
		listItemTemplateView: zlazytalent.Setting_ItemListitem,
		contentBinding: {
			target: zlazytalent.Setting,
			property: 'listItemDebug'
		},
		idName: '',
		cssClass: 'home-functions ui-shadow ui-corner-top clear'
	}),
	last_ui_item_db: M.ContainerView.design({
		cssClass: 'home-functions ui-shadow ui-corner-bottom clear ui-listview last-ui-item',
		childViews: 'la',				   
		la: M.ContainerView.design({
			cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c',
			childViews: 'debug_log_switch',
			debug_log_switch:M.ToggleSwitchView.design({
			    label: 'Debug Log',
			    isMini: NO,
			    onLabel: 'ON',
			    offLabel: 'OFF',
			    offValue: 0,
			    onValue: 1,
			    isInline: YES,
			    cssClass:'lang',
			    events:{
				change:{
				    action: function(){
					console.log('change debug_log');
				    }
				}
			    }
			})
		})
	})
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Home_RecruiterPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Home_FunctionsListitem.js');
zlazytalent.Home_RecruiterPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.MyHome,
            action: 'init'
        }
    },
    
    cssClass: 'Home_RecruiterPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
		showBackButton: NO,    
    }),

    content: M.ScrollView.design({
	
        childViews: 'functions lg_button',        
	functions: M.ListView.design({
		listItemTemplateView: zlazytalent.Home_FunctionsListitem,
		contentBinding: {
			target: zlazytalent.MyHome,
			property: 'listRecruiterFunctions'
		},
		idName: 'name',
		cssClass: 'home-functions ui-shadow ui-corner-all clear'
	}),
	lg_button: M.ButtonView.design({
		value: 'Logout',
		events: {
			tap: {
				target: zlazytalent.Authorization,
				action: 'logout'
			}
		},
		dataTheme: 'b'
	})  
	
	/*
	cssClass: 'index-content',
        childViews: 'space_header b1 b2 b3 b4 b5 space_center1 b6 b7 b8 b9 b10 space_center2',
	space_header: M.ContainerView.design({
            cssClass: 'space-header'
        }),
        b1: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	b2: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Candidates',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoCandidatesSearchPage'
			}
		}
        }),
	b3: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	b4: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Roles',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoRolesRecruiter'
			}
		}
        }),
	b5: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	space_center1: M.ContainerView.design({
            cssClass: 'space-center'
        }),
	b6: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	b7: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Profile',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoProfileRecruiterPage'
			}
		}
        }),
	b8: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	
	b12: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Setting',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoSetting'
			}
		}
        }),
	
	b10: M.ContainerView.design({
            cssClass: 'p10 home_icons'
        }),
	space_center2: M.ContainerView.design({
            cssClass: 'space-center'
        }),
	b9: M.ContainerView.design({
		cssClass: 'p35 home_icons outer-center-text ui-shadow ui-btn-up-b ui-btn-corner-all',
		childViews: 'middle',
		middle :M.ContainerView.design({
			childViews: 'name',
			name: M.LabelView.design({
				value: 'Messages',
				cssClass: 'text inner-center-text'
			}),
			cssClass: 'middle-center-text'
		}),
		events: {
			tap: {
				target: zlazytalent.PageManager,
				action: 'gotoMessages'
			}
		}
        }),
	*/
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Candidates_TabView
// ==========================================================================

zlazytalent.Candidates_TabView = M.TabBarView.design({
    childViews: 'searchCandidates savedCandidates',
    transition: M.TRANSITION.NONE,
    name: 'tabs',
						     
    searchCandidates: M.TabBarItemView.design({
        value: 'Search Candidates',
        page: 'candidatesSearchPage',        
        isActive: YES,	      
    }),

    savedCandidates: M.TabBarItemView.design({
        value: 'Your Saved Candidates',
        page: 'candidatesSavedPage',  	
    }),

   cssClass: 'navbar-tabview'

});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: SearchCandidatesPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Candidates_TabView.js');
zlazytalent.Candidates_SearchPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pagebeforeshow: {
            target: zlazytalent.Candidates,
            action: 'init'
        },
        pageshow: {
            target: zlazytalent.Candidates,
            action: 'setSearchCandidatesActiveTab'
        }
    },
    
    cssClass: 'Candidates_SearchPage',

    childViews: 'header content',

   header: zlazytalent.Header_ToolbarView.cloneThisObject({
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'Search Candidates',
		cssClass: 'label-page'
	})
    }),

    content: M.ScrollView.design({
        childViews: 'tabview search_form result_tab',		
	tabview: zlazytalent.Candidates_TabView,		
	search_form:M.FormView.design({
		childViews: 'skillSet companySize locations search',
		cssClass:'content-tabview',
		skillSet: M.SearchBarView.design({
			initialText: 'Fill in interested skill sets',
			cssClassOnInit: 'skillSet'
		}),
		companySize: M.SearchBarView.design({
			initialText: 'Fill in interested company size',
			cssClassOnInit: 'companySize'
		}),
		locations: M.SearchBarView.design({
			initialText: 'Fill in interested location',
			cssClassOnInit: 'locations'
		}),
		search: M.ButtonView.design({
			value: 'Search',
			cssClass: 'b',
			events: {
				tap: {
					target: zlazytalent.Candidates,
					action: 'openSearchCandidatesTabs'
				}
			}
		})
	}),
	result_tab: M.Element.design({
		childViews: 'header scroll_view',
		header: M.LabelView.design({
			value: '<div data-role="header" id="HeaderSearchCandidatesTabs"> <h1 style="padding: 10px;font-size: 20px;">Your Save Roles</h1><div class="ui-btn-right"></div> </div> ',
			cssStyle: ''
		}),
		scroll_view:M.ScrollView.design({
			childViews: 'list_viewed',   
	        list_viewed: M.ListView.design({
				listItemTemplateView: zlazytalent.Candidates_ItemListitem.design({
					events: {
						tap: {
							target: zlazytalent.Candidates,
							action: 'gotoSingleCandidate'
						}
					}
				}),
				contentBinding: {
					target: zlazytalent.Candidates,
					property: 'listSaveCandidates'						
				},              
	            removeItemsOnUpdate: NO,
				cssClass: 'ui-shadow ui-corner-all clear visitors-content'
	        }),
			cssStyle: ''
	    }),
	    cssClass:'result-search-candidates-tabs',
		cssStyle:'position:absolute;top:100%;width:100%;margin-left:-15px;background:white;display:none;'
	})
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: SaveCandidatesPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Candidates_TabView.js');
m_require('app/views/Candidates_ItemListitem.js');
zlazytalent.Candidates_SavePage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
		pagebeforeshow: {
            target: zlazytalent.Candidates,
            action: 'init'
        },
        pageshow: {
            target: zlazytalent.Candidates,
            action: 'setSavedCandidatesActiveTab'
        }
    },
    
    cssClass: 'SaveCandidatesPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'Your Saved Candidates',
		cssClass: 'label-page'
	})
    }),

    content: M.ScrollView.design({
        childViews: 'tabview list_viewed',
	    tabview: zlazytalent.Candidates_TabView,        
        list_viewed: M.ListView.design({
		listItemTemplateView: zlazytalent.Candidates_ItemListitem.design({
			events: {
				tap: {
					target: zlazytalent.Candidates,
					action: 'gotoSingleCandidate'
				}
			}
		}),
		contentBinding: {
			target: zlazytalent.Candidates,
			property: 'listSaveCandidates'						
		},              
                removeItemsOnUpdate: NO,
		cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
        }),
    }),

   footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: WelcomePage
// ==========================================================================

zlazytalent.WelcomePage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Welcome,
            action: 'init'
        }
    },
    
    cssClass: 'WelcomePage',

    childViews: 'content',

    
    content: M.ScrollView.design({
	childViews: 'content',
	content: M.ContainerView.design({			 
		childViews: 'logo sign_in_box sign_in bt_facebook bt_linkedin fg_password sign_up_page',
		logo: M.LabelView.design({
			value: 'LAZY TALENT',
			cssClass: 'logo-text'
		}),
		sign_in: M.ButtonView.design({
			value: 'Sign In',
			events: {
				tap: {
					target: zlazytalent.PageManager,
					action: 'gotoHome'
				},
				click: {
					target: zlazytalent.PageManager,
					action: 'gotoHome'
				}
			},
			dataTheme: 'b'
		}),
		bt_facebook: M.ContainerView.design({
			childViews: 'icon link',
			icon:M.ImageView.design({
				value: 'theme/images/facebook_icon.png',
				cssClass: '',
				cssStyle:'width:40px;height:40px;float:left;background:white;'
			}),
			link:M.LabelView.design({
				value: 'Login with Facebook',
				cssClass: '',
				cssStyle: 'height:20px;text-align:center;float:left;padding:10px;font-size: 20px;font-weight: bold;'
			}),
			events: {
				tap: {
					target: zlazytalent.Authorization,
					action: 'loginByFacebook'
				},
				click: {
					target: zlazytalent.Authorization,
					action: 'loginByFacebook'
				}
			},
			cssStyle:'clear:both;margin:0 0 10px 0;overflow:hidden;cursor:pointer;background:white;overflow:hidden;'
		}),
		bt_linkedin: M.ContainerView.design({
			childViews: 'icon link',
			icon:M.ImageView.design({
				value: 'theme/images/linkedin_icon.jpg',
				cssClass: '',
				cssStyle:'width:40px;height:40px;float:left;background:white;'
			}),
			link:M.LabelView.design({
				value: 'Sign in with Linkedin',
				cssClass: '',
				cssStyle: 'height:20px;text-align:center;float:left;padding:10px;font-size: 20px;font-weight: bold;display: inline-block;'
			}),
			events: {
				tap: {
					target: zlazytalent.Authorization,
					action: 'loginByLinkedin'
				},
				click: {
					target: zlazytalent.Authorization,
					action: 'loginByLinkedin'
				}
			},
			cssStyle:'clear:both;margin:0 0 10px 0;overflow:hidden;cursor:pointer;background:white;overflow:hidden;'
		}),
		/*
		bt_facebook: M.ButtonView.design({
			value: 'Login With Facebook',
			events: {
				tap: {
					target: zlazytalent.Authorization,
					action: 'loginByFacebook'
				},
				click: {
					target: zlazytalent.Authorization,
					action: 'loginByFacebook'
				}
			},
			dataTheme: 'b'
		}),
		bt_linkedin: M.ButtonView.design({
			value: 'Login With Linkedin',
			events: {
				tap: {
					target: zlazytalent.Authorization,
					action: 'loginByLinkedin'
				},
				click: {
					target: zlazytalent.Authorization,
					action: 'loginByLinkedin'
				}
			},
			dataTheme: 'b'
		}),
		*/
		sign_in_box:M.ContainerView.design({
			cssClass: 'sign-in-box',
			childViews: 'username password',
			username: M.TextFieldView.design({
				hasMultipleLines: NO,
				initialText: 'Username',
				cssClass: '',
				name:'sign_in[username]',
				value:''
			}).setCssClass('username'),
			password: M.TextFieldView.design({
				hasMultipleLines: NO,
				initialText: 'Password',
				cssClass: 'password',
				name:'sign_in[password]',
				inputType:M.INPUT_PASSWORD
			})
		}),
		fg_password: M.LabelView.design({
			value: 'Forgot your password?',
			cssClass: 'description',
			cssStyle: 'margin:14px 0 7px 0;clear:both;',
			hyperlinkTarget: 'http://www.google.com',
			hyperlinkType: M.HYPERLINK_WEBSITE,
			
		}),
		sign_up_page: M.LabelView.design({
			value: 'Dont have account,sign up here.',
			cssClass: 'description',
			cssStyle: 'clear:both;text-decoration: underline;cursor:pointer;',
			events: {
				tap: {
					target: zlazytalent.PageManager,
					action: 'gotoSignUpPage'
				},
				click: {
					target: zlazytalent.PageManager,
					action: 'gotoSignUpPage'
				}
			},
		}),
		sign_up: M.ButtonView.design({
			value: 'Go To Signup Page',
			events: {
				tap: {
					target: zlazytalent.PageManager,
					action: 'gotoSignUpPage'
				},
				click: {
					target: zlazytalent.PageManager,
					action: 'gotoSignUpPage'
				}
			},
			dataTheme: 'b',
			cssStyle:'',
			cssClass:'bt-sign-up'
		}),
		description: M.LabelView.design({
			value: 'Copyright © 2013 Hitch Lab. All rights reserved',
			cssClass: 'description'
		}),
		cssClass:'box-welcome'
	})
    })

    

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Visitors_ItemListitem
// ==========================================================================

zlazytalent.Visitors_ItemListitem = M.ListItemView.design({

    childViews: 'image1 label1 label2 text',

    events: {
        tap: {
            target: zlazytalent.Visitors,
            action: 'showUser'
        }
    },

    image1: M.ImageView.design({
        valuePattern: '<%= userImage %>',
        cssClass: 'listThumb visitor-img'
    }),

    label1 : M.LabelView.design({
        valuePattern: '<%= userName %>',
        cssClass: 'username'
    }),

    label2 : M.LabelView.design({
        valuePattern: '<%= createdAt %>',
        
        cssClass: 'date'
    }),

    text : M.LabelView.design({
        valuePattern: '<%= tweet %>',
        cssClass: 'text'
    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: VisitorsPage
// ==========================================================================
m_require('app/views/Visitors_ItemListitem.js');
zlazytalent.VisitorsPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Visitors,
            action: 'init'
        }
    },
    
    cssClass: 'VisitorsPage',

    childViews: 'header content footer',

    header: M.ToolbarView.design({
        showBackButton: YES,
        childViews: 'label left right',
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'SETTINGS PAGE',
		cssClass: 'label-page'
	}),
	left:M.ContainerView.design({
		anchorLocation: M.LEFT,
		childViews: 'back_button',
		back_button: M.ContainerView.design({
			cssClass: 'back-button',
			childViews: 'img',
			img: M.ImageView.design({
				value: 'theme/images/arrow_l_w.png',
				cssClass: ''
			}),
			events: {
				click: {
					target: zlazytalent.PageManager,
					action: 'goBackPage'
				},
				tap: {
					target: zlazytalent.PageManager,
					action: 'goBackPage'
				}
			}
		})
	}),
	right:M.ContainerView.design({
		anchorLocation: M.RIGHT,
		childViews: 'back_button',
		back_button: M.ContainerView.design({
			cssClass: 'logout-button',
			childViews: 'avatar label',
			avatar:M.ImageView.design({
				value: zlazytalent.Authorization.getAvatar(),
				cssClass: 'avatar'
			}),
			label: M.LabelView.design({
				value: zlazytalent.Authorization.getFullName(),
				cssClass: 'name'
			}),
			events: {
				tap: {
					target: zlazytalent.MyHome,
					action: 'logoutDialog'
				}
			}
		})
	}),
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'list1',

            list1: M.ListView.design({
                contentBinding: {
                    target: zlazytalent.Visitors,
                    property: 'listItemAbout'
                },
                listItemTemplateView: zlazytalent.Visitors_ItemListitem,
                removeItemsOnUpdate: YES,
		cssClass: 'home-functions ui-shadow ui-corner-all clear visitors-content'
        })
    }),

    footer: M.ToolbarView.design({
        childViews: 'content',
        content: M.ContainerView.design({
		cssClass: 'footer_content',
		childViews: ' main credits',
		
		main: M.ContainerView.design({
			cssClass: 'main'
		}),
		credits: M.LabelView.design({
			value: 'DEMO LAZY TALENT.<br/>Copyright © 2012 Hitch Lab. All rights reserved.',
			cssClass: 'credits'
		}),
		anchorLocation: M.CENTER
	}),
        anchorLocation: M.BOTTOM
    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Message_e_TabView
// ==========================================================================

zlazytalent.Message_TabView = M.TabBarView.design({

    childViews: 'inbox sent compose',    

    transition: M.TRANSITION.NONE,

    name: 'tabs',

    inbox: M.TabBarItemView.design({

        value: 'Inbox',
        page: 'messageInboxPage',        
        isActive: YES,
	icon:'bars'
      
    }),

    sent: M.TabBarItemView.design({

        value: 'Sent',
        page: 'messageSentPage',       
	icon:'edit'
    }),

    compose: M.TabBarItemView.design({

        value: 'Compose',
        page: 'messageComposePage',
	icon:'minus'
    }),
						  
    cssClass: 'navbar-tabview'

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// Controller: Message
// Description :
//		Controller cua page Message
// ==========================================================================
m_require('app/views/Message_TabView.js');
zlazytalent.Message = M.Controller.extend({

    /* sample controller property */
    ON_LOG : true ,
    listItemInbox: null,
    listItemSent : null,
    //messega now
    message:null,
    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            /* do something here, when page is loaded the first time. */
	    M.Logger.log('zlazytalent.Message first load', M.INFO, this.ON_LOG);
	    var b = zlazytalent.MESSAGES.createRecord﻿({
		      name	: 'Recruiter 1',
		      avatar	: 'https:\/\/si0.twimg.com\/profile_images\/2740079010\/97e32492a73f26d78143b325903e124b_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	    });
	    var c = zlazytalent.MESSAGES.createRecord﻿({
		      name	: 'Recruiter 2',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/3061138014\/d84e6c2aad6c843c54f1549423a8a82c_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	    });
	    var d = zlazytalent.MESSAGES.createRecord﻿({
		      name	: 'Recruiter 3',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/2323277496\/77sctramy07cet1a2izo_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	    });
	     this.set('listItemInbox', [ b, c ,d ]);
	    var a = zlazytalent.MESSAGES.createRecord﻿({
		      name	: 'Recruiter 2',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/3061138014\/d84e6c2aad6c843c54f1549423a8a82c_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	    });
	    this.set('listItemSent', [ a ]);
        }
        /* do something, for any other load. */
	M.Logger.log("zlazytalent.Message load", M.INFO, this.ON_LOG);
    },
    
    setInboxActiveTab:function(){
	
	var content = M.ViewManager.getView('messageInboxPage', 'content');
	var tabview = M.ViewManager.getView(content, 'tabview');
	var inbox   = M.ViewManager.getView(tabview, 'inbox');
	tabview.setActiveTab(inbox);
    },
     setSentActiveTab:function(){
	
	var content = M.ViewManager.getView('messageSentPage', 'content');
	var tabview = M.ViewManager.getView(content, 'tabview');
	var inbox   = M.ViewManager.getView(tabview, 'sent');
	tabview.setActiveTab(inbox);
    },
     setComposeActiveTab:function(){
	
	var content = M.ViewManager.getView('messageComposePage', 'content');
	var tabview = M.ViewManager.getView(content, 'tabview');
	var inbox   = M.ViewManager.getView(tabview, 'compose');
	tabview.setActiveTab(inbox);
    },
    /* 
    * Function 
    */
    addObjectItemInbox:function(){
	var c = zlazytalent.MESSAGES.createRecord﻿({
		      name	: 'Recruiter 2',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/3061138014\/d84e6c2aad6c843c54f1549423a8a82c_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	});
	this.set('listItemInbox', [ c ], true);
	M.Logger.log("zlazytalent.Message addObjectItemInbox", M.INFO, this.ON_LOG);
    },
    addObjectItemSent:function(){
	 var a = zlazytalent.MESSAGES.createRecord﻿({
		      name	: 'Recruiter 2',
		      avatar	: 'http:\/\/a0.twimg.com\/profile_images\/3061138014\/d84e6c2aad6c843c54f1549423a8a82c_normal.jpeg',
		      content	: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<div class="score"></div>',
		      time	: 'Fri, 04 Jan 2013 05:47:01 +0000'
	    });
	    //a.save();
	this.set('listItemSent', [a], true);
	M.Logger.log('zlazytalent.Message addObjectItemSent', M.INFO, this.ON_LOG);
    },
    gotoMessageViewPage: function(domId, modelId){
	M.Logger.log('domId = '+domId +'modelId = '+modelId, M.INFO, this.ON_LOG);
	this.set('message', zlazytalent.MESSAGES.recordManager.getRecordById(modelId));
	M.Logger.log(this.message.get('name'), M.INFO, this.ON_LOG);
	this.switchToPage('messageViewPage');
    },
    viewMessageViewPage: function(){
	var label = M.ViewManager.getView('messageViewPage', 'label');
	if(label != null){
		//label.setValue();
	}else{
		M.Logger.log('not found label object ', M.INFO, this.ON_LOG);
	}
    }
});

// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Message_SentPage
// Description :
//		Template cho Page Message Sent
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Message_TabView.js');
m_require('app/views/Template01_ListView.js');
zlazytalent.Message_SentPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
	 pagebeforeshow : {
	    target: zlazytalent.Message,
            action: 'init'
	},
        pageshow: {
            target: zlazytalent.Message,
            action: 'setSentActiveTab'
        }
    },
    
    cssClass: '',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'Sent',
		cssClass: 'label-page'
	})
    }),

    content: M.ScrollView.design({
        childViews: 'tabview list1 bt_loadmore',
        
	tabview: zlazytalent.Message_TabView,
	list1: M.ListView.design({
                contentBinding: {
                    target: zlazytalent.Message,
                    property: 'listItemSent'
                },
                listItemTemplateView: zlazytalent.Template01_ListView.design({
		    events: {
			  tap: {
				target: zlazytalent.Message,
				action: 'gotoMessageViewPage'
			  }
		    }
		}),
                removeItemsOnUpdate: YES,
		cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
        }),
	bt_loadmore:M.ButtonView.design({
		value: 'Load More',
		cssClass: 'b',
		events: {
			tap: {
				target: zlazytalent.Message,
				action: 'addObjectItemSent'
			}
		}
	})
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Message_ViewPage
// Description :
//		Template cho phan View 1 MESSAGE
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Message_TabView.js');
zlazytalent.Message_ViewPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Message,
            action: 'viewMessageViewPage'
        }
    },
    
    cssClass: 'Message_ViewPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'Single Message',
		cssClass: 'label-page'
	})
    }),

    content: M.ScrollView.design({
        childViews: 'tabview content',
        tabview: zlazytalent.Message_TabView,
	content: M.ContainerView.design({
		childViews: 'la',				   
		la: M.ContainerView.design({
			cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',
			childViews: 'info content',
			info:M.ContainerView.design({
				cssClass: 'profile-header',
				childViews: 'img name star',
				img:M.ImageView.design({
				    computedValue: {
						contentBinding: {
						    target: zlazytalent.Message,
						    property: 'message'
						},
						operation: function(v) {
						    if(v) {
							return v.get('avatar');
						    }
						}
					},
					cssClass: 'avatar'
				}),
				name: M.LabelView.design({
					computedValue: {
						contentBinding: {
						    target: zlazytalent.Message,
						    property: 'message'
						},
						operation: function(v) {
						    if(v) {
							return v.get('name');
						    }
						}
					},
					cssClass: 'info'
				})
			}),
			content:M.LabelView.design({
				computedValue: {
					contentBinding: {
						target: zlazytalent.Message,
						property: 'message'
					},
					operation: function(v) {
						if(v) {
						return v.get('content');
						}
					}
				},
				cssClass: 'info',
				cssStyle: 'font-weight: normal;color:black;clear:both;'
			})
		}),
		cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
	}),
	
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Message_ComposePage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Message_TabView.js');
zlazytalent.Message_ComposePage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
	pagebeforeshow : {
	    target: zlazytalent.Message,
            action: 'init'
	},
        pageshow: {
            target: zlazytalent.Message,
            action: 'setComposeActiveTab'
        }
    },
    
    cssClass: '',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'Compose',
		cssClass: 'label-page'
	})
    }),

    content: M.ScrollView.design({
        childViews: 'tabview form',
        
	tabview: zlazytalent.Message_TabView,
	form: M.FormView.design({
		childViews: 'to subject text date button',
		showAlertDialogOnError: YES,
		alertTo: '',

		to: M.TextFieldView.design({
			name: 'to',
			label: 'To',
			validators: [M.PresenceValidator.customize({
				msg: 'To error'
			})],
			cssClassOnError: 'error',
			cssClass: 'todos_form ',
			cssClassFieldContain:'field-contain'
		}),
		subject: M.TextFieldView.design({
			name: 'subject',
			label: 'Subject',
			validators: [M.PresenceValidator.customize({
				msg: 'Subject error'
			})],
			cssClassOnError: 'error',
			cssClass: 'todos_form'
		}),

		text: M.TextFieldView.design({
			hasMultipleLines: YES,
			name: 'text',
			label: 'Details',
			validators: [M.PresenceValidator.customize({
				msg: 'Details error'
			})],
			cssClassOnError: 'error',
			cssClass: 'todos_form'
		}),

		button: M.ButtonView.design({
			value: 'Send Email',
			cssClass: 'b',
			events: {
				tap: {
					target: zlazytalent.NewItemController,
					action: 'addTodo'
				}
			}
		}),		
		cssClass:'content-tabview'
        })
    
	
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Message_InboxPage
// ==========================================================================
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Message_TabView.js');
m_require('app/views/Visitors_ItemListitem.js');
zlazytalent.Message_InboxPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
	pagebeforeshow : {
	    target: zlazytalent.Message,
            action: 'init'
	},
        pageshow: {
            target: zlazytalent.Message,
            action: 'setInboxActiveTab'
        }
    },
    
    cssClass: '',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
	label: M.LabelView.design({
		anchorLocation: M.CENTER,
		value: 'Inbox',
		cssClass: 'label-page'
	})
    }),

    content: M.ScrollView.design({
        childViews: 'tabview list1 bt_loadmore',
        
	tabview: zlazytalent.Message_TabView,
	list1: M.ListView.design({
                contentBinding: {
                    target: zlazytalent.Message,
                    property: 'listItemInbox'
                },
                listItemTemplateView: zlazytalent.Template01_ListView.design({
		    events: {
			  tap: {
				target: zlazytalent.Message,
				action: 'gotoMessageViewPage'
			  }
		    }
		}),
                removeItemsOnUpdate: YES,
		cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
        }),
	bt_loadmore:M.ButtonView.design({
		value: 'Load More',
		cssClass: 'b',
		events: {
			tap: {
				target: zlazytalent.Message,
				action: 'addObjectItemInbox'
			}
		}
	})
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Roles_ItemsListitem
// ==========================================================================

zlazytalent.Roles_ItemsListitem = M.ListItemView.design({

   childViews: 'name image content page',
    events: {
        tap: {
            target: zlazytalent.Roles,
            action:'listObjectClicked'
        },
	click:{
	    target: zlazytalent.PageManager,
	    action:'gotoPage'
	}
    },
    name: M.LabelView.design({
        valuePattern: ' <%= name%> ',
	cssClass: 'username'
    }),
    image: M.ImageView.design({
	valuePattern: ' <%= image%> ',
	cssClass: 'role-img'
    }),
    content: M.ScrollView.design({
	cssClass: 'main_content',
	childViews: 'main ', 			
	main: M.LabelView.design({
		valuePattern: '<%= content%>',
		cssClass: 'role_content text',
	}),

    }),
    page: M.LabelView.design({
        valuePattern: '<%= page%>',
	cssClass: 'goto display-none'
    })
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: SavedRolesPage
// ==========================================================================
//thanh

m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Roles_TabView.js');
m_require('app/views/Roles_ItemsListitem.js'); 
zlazytalent.SavedRolesPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
			pagebeforeshow : {
				target: zlazytalent.Roles,
				action: 'init'
			},
			pageshow: {
				target: zlazytalent.Roles,
				action: 'setSavedRolessActiveTab'
			}
    },
    
    cssClass: 'SavedRolesPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
		label: M.LabelView.design({
			anchorLocation: M.CENTER,
			value: 'Saved Roles Page',
			cssClass: 'label-page'
		})
    }),

    content: M.ScrollView.design({
        childViews: 'tabview functions',
		tabview: zlazytalent.Roles_TabView,
        functions: M.ListView.design({
			listItemTemplateView: zlazytalent.Roles_ItemsListitem,
			contentBinding: {
				target: zlazytalent.Roles,
				property: 'listFunctions'
					
			},
			idName: '',
			cssClass: 'ui-shadow ui-corner-all clear visitors-content content-tabview'
		})
		
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: RolesPage
// ==========================================================================
//thanh
m_require('app/views/Header_ToolbarView.js');
m_require('app/views/Footer_ToolbarView.js');

m_require('app/views/Roles_ItemsListitem.js');
zlazytalent.RolesPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.Roles,
            action: 'init'
        }
    },
    
    cssClass: 'RolesPage',

    childViews: 'header content footer',

    header: zlazytalent.Header_ToolbarView.cloneThisObject({
		label: M.LabelView.design({
			anchorLocation: M.CENTER,
			value: 'Roles Page',
			cssClass: 'label-page'
		})
    }),
    content: M.ScrollView.design({
	cssClass: 'information',
	childViews: 'functions',        
	functions: M.ListView.design({
		listItemTemplateView: zlazytalent.Roles_ItemsListitem,
		contentBinding: {
			target: zlazytalent.Roles,
			property: 'listFunctions'
				
		},
		idName: '',
		cssClass: 'home-functions ui-shadow ui-corner-all clear roles-content'
	})
    }),

    footer: zlazytalent.Footer_ToolbarView.cloneThisObject()

});




// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: Signup_RecruitersProfile
// ==========================================================================

zlazytalent.Signup_RecruitersProfile = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.MyController,
            action: 'init'
        }
    },
    
    cssClass: 'Signup_RecruitersProfile',

    childViews: ' content ',

     
    content: M.ScrollView.design({
	
	childViews: 'content',
	content: M.ContainerView.design({			 
		childViews: 'logo frame_content description',
		logo: M.LabelView.design({
			value: 'LAZY TALENT',
			cssClass: 'logo-text'
		}),
		label: M.LabelView.design({
			value: 'Step 3: Your Profile Recruiters',
			cssClass: 'description',
			cssStyle: 'font-size: 1.2em;'
		}),  
      
		frame_content: M.ContainerView.design({
			cssClass: 'ui-shadow ui-corner-all clear ui-listview',
			cssStyle:'margin: 10px auto;',   
			childViews: 'la',   
			la: M.ContainerView.design({
				cssClass: 'ui-btn-up-m ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-last ui-btn-hover-c profile',       
				childViews: 'fullName headLine currentPosition contactInfo button',
				fullName: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Full Name',
					cssClass: ''
				}),
				headLine: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Head Line',
					cssClass: ''
				}),
				currentPosition: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Current Position',
					cssClass: ''
				}),
				contactInfo: M.TextFieldView.design({
					hasMultipleLines: NO,
					initialText: 'Contact Info',
					cssClass: ''
				}),
				button: M.ButtonView.design({
					value: 'Next',
					cssClass: 'b',
					events: {
						tap: {
							target: zlazytalent.SignUp,
							action: 'gotoSignupCreateRolesPage'
						}
					},
					dataTheme: 'b'
				})        
			})
		}),
		description: M.LabelView.design({
			value: 'Copyright © 2013 Hitch Lab. All rights reserved',
			cssClass: 'description'
		}),
		cssClass:'box-welcome'
        
        })
    })
    
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// View: zTest
// ==========================================================================

zlazytalent.zTest = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: zlazytalent.zTestController,
            action: 'init'
        }
    },
    
    cssClass: 'zTest',

    childViews: 'content',

    content: M.ScrollView.design({
	childViews: 'content',
	content: M.ContainerView.design({ 
		childViews: 'logo lean_token  bt_logout bt_create_recruiter_profile bt_create_talent_profile bt_create_role_profile',
		logo: M.LabelView.design({
			value: 'Z DEMO LAZY TALENT Z',
			cssClass: 'logo-text'
		}),
		lean_token: M.TextFieldView.design({
			hasMultipleLines: NO,
			initialText: 'Lean Token Key',
			cssClass: 'lean_token',
			cssStyle:'width: 370px;margin: 10px auto;'
		}),
		
		bt_logout: M.ButtonView.design({
			value: 'Log Out',
			events: {
				tap: {
					target: zlazytalent.zTestController,
					action: 'logOutTest'
				},
				click: {
					target: zlazytalent.zTestController,
					action: 'logOutTest'
				}
			},
			dataTheme: 'b'
		}),
	
		bt_create_recruiter_profile:M.ButtonView.design({
			value: 'Create Recruiter Profile',
			events: {
				tap: {
					target: zlazytalent.zTestController,
					action: 'createRecruiterProfile'
				},
				click: {
					target: zlazytalent.zTestController,
					action: 'createRecruiterProfile'
				}
			},
			dataTheme: 'b'
		}),

		bt_create_talent_profile:M.ButtonView.design({
			value: 'Create Talent Profile',
			events: {
				tap: {
					target: zlazytalent.zTestController,
					action: 'createTalentProfile'
				},
				click: {
					target: zlazytalent.zTestController,
					action: 'createTalentProfile'
				}
			},
			dataTheme: 'b'
		}),

		bt_create_role_profile:M.ButtonView.design({
			value: 'Create Role Profile',
			events: {
				tap: {
					target: zlazytalent.zTestController,
					action: 'createRoleProfile'
				},
				click: {
					target: zlazytalent.zTestController,
					action: 'createRoleProfile'
				}
			},
			dataTheme: 'b'
		}),


		cssClass:'box-welcome'
	})
    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: zlazytalent
// ==========================================================================

var zlazytalent  = zlazytalent || {};


zlazytalent.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage 	: 'landingPage',
    //home
    homePage 		: zlazytalent.HomePage,
    homeRecruiterPage	: zlazytalent.Home_RecruiterPage,
    homeTalentsPage     : zlazytalent.Home_TalentsPage,
				       
    searchRolesPage	: zlazytalent.SearchRolesPage,
    savedRolesPage	: zlazytalent.SavedRolesPage,
    visitorsPage	: zlazytalent.VisitorsPage,
    ratingPage 		: zlazytalent.RatingPage,
				       
    profilePage 	: zlazytalent.ProfilePage,
    profileRecruiterPage: zlazytalent.Profile_RecruiterPage,
			
    settingPage 	: zlazytalent.SettingPage,
    rolesPage		: zlazytalent.RolesPage,
    rolesImformationPage: zlazytalent.RolesIformationPage,
    
    //message
    messageInboxPage	: zlazytalent.Message_InboxPage,
    messageSentPage	: zlazytalent.Message_SentPage,
    messageComposePage	: zlazytalent.Message_ComposePage,
    messageViewPage	: zlazytalent.Message_ViewPage,
			
    viewedPage 		: zlazytalent.ViewedPage,   
    viewedViewPage	: zlazytalent.Viewed_ViewPage,
				       
				       
    candidatesSearchPage: zlazytalent.Candidates_SearchPage,
    candidatesSavedPage	: zlazytalent.Candidates_SavePage,
    candidatesViewPage	: zlazytalent.Candidates_ViewPage,				       
    candidatesPage	: zlazytalent.CandidatesPage,
				       
    rolesRecruiterPage	: zlazytalent.Roles_RecruiterPage,
    //before log in
    
    welcomePage		: zlazytalent.WelcomePage,
       
    singupTalentsProfile: zlazytalent.Signup_TalentsProfile,
    singupRecruitersProfile: zlazytalent.Signup_RecruitersProfile,
    signupCreateRolesPage : zlazytalent.Signup_CreateRolesPage,
				       
    landingPage		: zlazytalent.LandingPage,
				       
				       
				       
     //test
     zTest		: zlazytalent.zTest,
     /**
     * @interface
     *
     * This method defines an interface method for action before render page.
     */
    beforeRenderPage: function() {
	    //this.entryPage = 'candidatesSearchPage';
	    M.Logger.log("beforeRenderPage", M.INFO); 
    },
     /**
     * @interface
     *
     * This method defines an interface method for action after render page.
     */
    afterRenderPage: function() {	    
	    $('.star').raty({
		    half  : true,
		    score : 5,
		    path  : 'https://raw.github.com/wbotelhos/raty/master/img/'
	    });
	    M.Logger.log("afterRenderPage", M.INFO); 
    },
});
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
//Config database
var L = L || {};
L.TALENT 	= 1;
L.RECRUITER	= 0;
L.NONE		=-1;
M.MCore = M.Object.extend();
// ==========================================================================
// Project:   The M-Project Plus - Mobile HTML5 Application Framework
// Creator:   Steve Hoang
// Date:      07.01.2013
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
// LOG
//	+) 13.01.2013 : add cssStyle variable in style(function)
// ==========================================================================

// BASE ON

// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
//            (c) 2011 panacoda GmbH. All rights reserved.
// Creator:   Dominik
// Date:      02.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

M.Pagination = M.View.extend({
  
  
  
    /**
     * Renders a pagination
     *
     * @private
     * @returns {String} The toolbar view's html representation.
     */
    render: function() {
    
    
    },  
  
    /**
     * Applies some style-attributes to the pagination
     *
     * @private
     * @returns {String} The toolbar's styling as html representation.
     */
    style: function() {
        var html = '';
        if(this.cssClass) {
            html += ' class="' + this.cssClass + '" style="' + (this.cssStyle = (this.cssStyle != null) ? this.cssStyle : '') + '" ';
        }
        return html;
    }
})
M.Element = M.View.extend({
    /**
     * The type of this object.
     *
     * @type String
     */
    type: 'M.Element',
    /**
     *
     * @type Object
     */
    attribute: null,
    /**
     *
     * @type String
     * @default : 'div'
     */
    e : 'div',
    /**
     *
     * @type Boolean
     * @default : YES
     */		  
    end : YES,
    /**
     * Renders a simple div container and applies css classes if specified.
     *
     * @private
     * @returns {String} The container view's html representation.
     */
    render: function() {
	if(this.end == YES)
		this.html += '<' + this.e + ' id="' + this.id + '"' + this.style() + '>';
	else
		this.html += '<' + this.e + ' id="' + this.id + '"' + this.style() + '/>';
	
        if(this.value)
		this.html += this.value;
	
	this.renderChildViews();
	
	if(this.end == YES)
		this.html += '</' + this.e + '>';
	
        return this.html;
    },

    /**
     * Applies some style-attributes to the container view.
     *
     * @private
     * @returns {String} The container's styling as html representation.
     */
    style: function() {
        var html = ' ';	
	if(this.attribute != null){
		for (var i in this.attribute) {
			if (this.attribute.hasOwnProperty(i)) { 
				html += (i+ " =' "+ this.attribute[i]+" ' ");
			}
		}
	}
        if(this.cssClass) {
            html += ' class="' + this.cssClass + '"';
        }
        html += ' style="' + (this.cssStyle = (this.cssStyle != null) ? this.cssStyle : '') + '" ';
        return html;
    }
});
/*!
 * jQuery Raty - A Star Rating Plugin
 *
 * Licensed under The MIT License
 *
 * @version        2.4.5
 * @author         Washington Botelho
 * @documentation  wbotelhos.com/raty
 * 
 */

;(function(b){var a={init:function(c){return this.each(function(){var d=this,h=b(d).empty();d.opt=b.extend(true,{},b.fn.raty.defaults,c);h.data("settings",d.opt);d.opt.number=a.between(d.opt.number,0,20);if(d.opt.path.substring(d.opt.path.length-1,d.opt.path.length)!="/"){d.opt.path+="/";}if(typeof d.opt.score=="function"){d.opt.score=d.opt.score.call(d);}if(d.opt.score){d.opt.score=a.between(d.opt.score,0,d.opt.number);}for(var e=1;e<=d.opt.number;e++){b("<img />",{src:d.opt.path+((!d.opt.score||d.opt.score<e)?d.opt.starOff:d.opt.starOn),alt:e,title:(e<=d.opt.hints.length&&d.opt.hints[e-1]!==null)?d.opt.hints[e-1]:e}).appendTo(d);if(d.opt.space){h.append((e<d.opt.number)?"&#160;":"");}}d.stars=h.children('img:not(".raty-cancel")');d.score=b("<input />",{type:"hidden",name:d.opt.scoreName}).appendTo(d);if(d.opt.score&&d.opt.score>0){d.score.val(d.opt.score);a.roundStar.call(d,d.opt.score);}if(d.opt.iconRange){a.fill.call(d,d.opt.score);}a.setTarget.call(d,d.opt.score,d.opt.targetKeep);var g=d.opt.space?4:0,f=d.opt.width||(d.opt.number*d.opt.size+d.opt.number*g);if(d.opt.cancel){d.cancel=b("<img />",{src:d.opt.path+d.opt.cancelOff,alt:"x",title:d.opt.cancelHint,"class":"raty-cancel"});if(d.opt.cancelPlace=="left"){h.prepend("&#160;").prepend(d.cancel);}else{h.append("&#160;").append(d.cancel);}f+=(d.opt.size+g);}if(d.opt.readOnly){a.fixHint.call(d);if(d.cancel){d.cancel.hide();}}else{h.css("cursor","pointer");a.bindAction.call(d);}h.css("width",f);});},between:function(e,d,c){return Math.min(Math.max(parseFloat(e),d),c);},bindAction:function(){var c=this,e=b(c);e.mouseleave(function(){var f=c.score.val()||undefined;a.initialize.call(c,f);a.setTarget.call(c,f,c.opt.targetKeep);if(c.opt.mouseover){c.opt.mouseover.call(c,f);}});var d=c.opt.half?"mousemove":"mouseover";if(c.opt.cancel){c.cancel.mouseenter(function(){b(this).attr("src",c.opt.path+c.opt.cancelOn);c.stars.attr("src",c.opt.path+c.opt.starOff);a.setTarget.call(c,null,true);if(c.opt.mouseover){c.opt.mouseover.call(c,null);}}).mouseleave(function(){b(this).attr("src",c.opt.path+c.opt.cancelOff);if(c.opt.mouseover){c.opt.mouseover.call(c,c.score.val()||null);}}).click(function(f){c.score.removeAttr("value");if(c.opt.click){c.opt.click.call(c,null,f);}});}c.stars.bind(d,function(g){var h=parseInt(this.alt,10);if(c.opt.half){var f=parseFloat((g.pageX-b(this).offset().left)/c.opt.size),i=(f>0.5)?1:0.5;h=parseFloat(this.alt)-1+i;a.fill.call(c,h);if(c.opt.precision){h=h-i+f;}a.showHalf.call(c,h);}else{a.fill.call(c,h);}e.data("score",h);a.setTarget.call(c,h,true);if(c.opt.mouseover){c.opt.mouseover.call(c,h,g);}}).click(function(f){c.score.val((c.opt.half||c.opt.precision)?e.data("score"):this.alt);if(c.opt.click){c.opt.click.call(c,c.score.val(),f);}});},cancel:function(c){return b(this).each(function(){var d=this,e=b(d);if(e.data("readonly")===true){return this;}if(c){a.click.call(d,null);}else{a.score.call(d,null);}d.score.removeAttr("value");});},click:function(c){return b(this).each(function(){if(b(this).data("readonly")===true){return this;}a.initialize.call(this,c);if(this.opt.click){this.opt.click.call(this,c);}else{a.error.call(this,'you must add the "click: function(score, evt) { }" callback.');}a.setTarget.call(this,c,true);});},error:function(c){b(this).html(c);b.error(c);},fill:function(k){var c=this,h=c.stars.length,g=0,d,j,f;for(var e=1;e<=h;e++){d=c.stars.eq(e-1);if(c.opt.iconRange&&c.opt.iconRange.length>g){j=c.opt.iconRange[g];if(c.opt.single){f=(e==k)?(j.on||c.opt.starOn):(j.off||c.opt.starOff);}else{f=(e<=k)?(j.on||c.opt.starOn):(j.off||c.opt.starOff);}if(e<=j.range){d.attr("src",c.opt.path+f);}if(e==j.range){g++;}}else{if(c.opt.single){f=(e==k)?c.opt.starOn:c.opt.starOff;}else{f=(e<=k)?c.opt.starOn:c.opt.starOff;}d.attr("src",c.opt.path+f);}}},fixHint:function(){var c=b(this),e=parseInt(this.score.val(),10),d=this.opt.noRatedMsg;if(!isNaN(e)&&e>0){d=(e<=this.opt.hints.length&&this.opt.hints[e-1]!==null)?this.opt.hints[e-1]:e;}c.data("readonly",true).css("cursor","default").attr("title",d);this.score.attr("readonly","readonly");this.stars.attr("title",d);},getScore:function(){var d=[],c;b(this).each(function(){c=this.score.val();d.push(c?parseFloat(c):undefined);});return(d.length>1)?d:d[0];},readOnly:function(c){return this.each(function(){var d=b(this);if(d.data("readonly")===c){return this;}if(this.cancel){if(c){this.cancel.hide();}else{this.cancel.show();}}if(c){d.unbind();d.children("img").unbind();a.fixHint.call(this);}else{a.bindAction.call(this);a.unfixHint.call(this);}d.data("readonly",c);});},reload:function(){return a.set.call(this,{});},roundStar:function(e){var d=(e-Math.floor(e)).toFixed(2);if(d>this.opt.round.down){var c=this.opt.starOn;if(d<this.opt.round.up&&this.opt.halfShow){c=this.opt.starHalf;}else{if(d<this.opt.round.full){c=this.opt.starOff;}}this.stars.eq(Math.ceil(e)-1).attr("src",this.opt.path+c);}},score:function(){return arguments.length?a.setScore.apply(this,arguments):a.getScore.call(this);},set:function(c){this.each(function(){var d=b(this),f=d.data("settings"),e=d.clone().removeAttr("style").insertBefore(d);d.remove();e.raty(b.extend(f,c));});return b(this.selector);},setScore:function(c){return b(this).each(function(){if(b(this).data("readonly")===true){return this;}a.initialize.call(this,c);a.setTarget.call(this,c,true);});},setTarget:function(e,d){if(this.opt.target){var c=b(this.opt.target);if(c.length==0){a.error.call(this,"target selector invalid or missing!");}var f=e;if(!d||f===undefined){f=this.opt.targetText;}else{if(this.opt.targetType=="hint"){f=(f===null&&this.opt.cancel)?this.opt.cancelHint:this.opt.hints[Math.ceil(f-1)];}else{f=this.opt.precision?parseFloat(f).toFixed(1):parseInt(f,10);}}if(this.opt.targetFormat.indexOf("{score}")<0){a.error.call(this,'template "{score}" missing!');}if(e!==null){f=this.opt.targetFormat.toString().replace("{score}",f);}if(c.is(":input")){c.val(f);}else{c.html(f);}}},showHalf:function(d){var c=(d-Math.floor(d)).toFixed(1);if(c>0&&c<0.6){this.stars.eq(Math.ceil(d)-1).attr("src",this.opt.path+this.opt.starHalf);}},initialize:function(c){c=!c?0:a.between(c,0,this.opt.number);a.fill.call(this,c);if(c>0){if(this.opt.halfShow){a.roundStar.call(this,c);}this.score.val(c);}},unfixHint:function(){for(var c=0;c<this.opt.number;c++){this.stars.eq(c).attr("title",(c<this.opt.hints.length&&this.opt.hints[c]!==null)?this.opt.hints[c]:c);}b(this).data("readonly",false).css("cursor","pointer").removeAttr("title");this.score.attr("readonly","readonly");}};b.fn.raty=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1));}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments);}else{b.error("Method "+c+" does not exist!");}}};b.fn.raty.defaults={cancel:false,cancelHint:"cancel this rating!",cancelOff:"cancel-off.png",cancelOn:"cancel-on.png",cancelPlace:"left",click:undefined,half:false,halfShow:true,hints:["bad","poor","regular","good","gorgeous"],iconRange:undefined,mouseover:undefined,noRatedMsg:"not rated yet",number:5,path:"img/",precision:false,round:{down:0.25,full:0.6,up:0.76},readOnly:false,score:undefined,scoreName:"score",single:false,size:16,space:true,starHalf:"star-half.png",starOff:"star-off.png",starOn:"star-on.png",target:undefined,targetFormat:"{score}",targetKeep:false,targetText:"",targetType:"hint",width:undefined};})(jQuery);
