TOP=..

DEST_DIR=generated

BOUND_FRAMEWORKS= \
		  AppKit	\
		  CoreAnimation \
		  CoreLocation	\
		  Foundation	\
		  GLKit		\
		  GameKit	\
		  MapKit	\
		  OpenGLES	\
		  StoreKit	\
		  Twitter	\
		  UIKit		\
		  $(end)

EXTRA_FILES= objc.js

FRAMEWORK_SOURCES_Foundation= \
	Foundation/Protocol.js \
	Foundation/nspoint.js \
	Foundation/nsrect.js \
	Foundation/nssize.js \
	Foundation/nsobject.js \
	Foundation/nsbundle.js \
	Foundation/nsresponder.js \
	Foundation/nsrunloop.js \
	Foundation/nsindexpath.js


FRAMEWORK_SOURCES_GLKit= \
	GLKit/glknamedeffect.js \
	GLKit/glkviewcontrollerdelegate.js \
	GLKit/glkviewdelegate.js \
	GLKit/glkbaseeffect.js \
	GLKit/glkeffectproperty.js \
	GLKit/glkeffectpropertyfog.js \
	GLKit/glkeffectpropertylight.js \
	GLKit/glkeffectpropertymaterial.js \
	GLKit/glkeffectpropertytexture.js \
	GLKit/glkeffectpropertytransform.js \
	GLKit/glkreflectionmapeffect.js \
	GLKit/glkskyboxeffect.js \
	GLKit/glktextureinfo.js \
	GLKit/glktextureloader.js \
	GLKit/glkview.js \
	GLKit/glkcanvasview.js \
	GLKit/glkviewcontroller.js

FRAMEWORK_SOURCES_GameKit= \
	GameKit/gkachievement.js \
	GameKit/gkachievementdescription.js \
	GameKit/gkachievementviewcontroller.js \
	GameKit/gkachievementviewcontrollerdelegate.js \
	GameKit/gkfriendrequestcomposeviewcontroller.js \
	GameKit/gkfriendrequestcomposeviewcontrollerdelegate.js \
	GameKit/gkinvite.js \
	GameKit/gkleaderboard.js \
	GameKit/gkleaderboardviewcontroller.js \
	GameKit/gkleaderboardviewcontrollerdelegate.js \
	GameKit/gklocalplayer.js \
	GameKit/gkmatch.js \
	GameKit/gkmatchdelegate.js \
	GameKit/gkmatchmaker.js \
	GameKit/gkmatchmakerviewcontroller.js \
	GameKit/gkmatchmakerviewcontrollerdelegate.js \
	GameKit/gkmatchrequest.js \
	GameKit/gknotificationbanner.js \
	GameKit/gkpeerpickercontroller.js \
	GameKit/gkpeerpickercontrollerdelegate.js \
	GameKit/gkplayer.js \
	GameKit/gkscore.js \
	GameKit/gksession.js \
	GameKit/gksessiondelegate.js \
	GameKit/gkturnbasedeventhandler.js \
	GameKit/gkturnbasedeventhandlerdelegate.js \
	GameKit/gkturnbasedmatch.js \
	GameKit/gkturnbasedmatchmakerviewcontroller.js \
	GameKit/gkturnbasedmatchmakerviewcontrollerdelegate.js \
	GameKit/gkturnbasedparticipant.js \
	GameKit/gkvoicechat.js \
	GameKit/gkvoicechatclient.js \
	GameKit/gkvoicechatservice.js

FRAMEWORK_SOURCES_MapKit= \
	MapKit/mkannotation.js \
	MapKit/mkannotationview.js \
	MapKit/mkcircle.js \
	MapKit/mkcircleview.js \
	MapKit/mkmapview.js \
	MapKit/mkmapviewdelegate.js \
	MapKit/mkmultipoint.js \
	MapKit/mkoverlay.js \
	MapKit/mkoverlaypathview.js \
	MapKit/mkoverlayview.js \
	MapKit/mkpinannotationview.js \
	MapKit/mkplacemark.js \
	MapKit/mkpointannotation.js \
	MapKit/mkpolygon.js \
	MapKit/mkpolygonview.js \
	MapKit/mkpolyline.js \
	MapKit/mkpolylineview.js \
	MapKit/mkreversegeocoder.js \
	MapKit/mkreversegeocoderdelegate.js \
	MapKit/mkshape.js \
	MapKit/mkuserlocation.js \
	MapKit/mkusertrackingbarbuttonitem.js

FRAMEWORK_SOURCES_AppKit= \
	AppKit/nsalert.js \
	AppKit/nsanimationdelegate.js \
	AppKit/nsanimation.js \
	AppKit/nsanimationcontext.js \
	AppKit/nsview.js \
	AppKit/nscolor.js \
	AppKit/nscolorlist.js \
	AppKit/nscontrol.js \
	AppKit/nscontroller.js \
	AppKit/nsbutton.js \
	AppKit/nstablecellview.js \
	AppKit/nstablecolumn.js \
	AppKit/nstableviewdelegate.js \
	AppKit/nstableviewdatasource.js \
	AppKit/nstableview.js \
	AppKit/nstablerowview.js \
	AppKit/nswindow.js \
	AppKit/nswindowcontroller.js \
	AppKit/nsapplication.js \
	AppKit/nsapplicationdelegate.js

FRAMEWORK_SOURCES_GameKit= \
	StoreKit/skmutablepayment.js \
	StoreKit/skpayment.js \
	StoreKit/skpaymentqueue.js \
	StoreKit/skpaymenttransaction.js \
	StoreKit/skpaymenttransactionobserver.js \
	StoreKit/skproduct.js \
	StoreKit/skproductsrequest.js \
	StoreKit/skproductsrequestdelegate.js \
	StoreKit/skproductsresponse.js \
	StoreKit/skrequest.js \
	StoreKit/skrequestdelegate.js

FRAMEWORK_SOURCES_OpenGLES= \
	OpenGLES/eaglcontext.js

FRAMEWORK_SOURCES_CoreAnimation= \
	CoreAnimation/caaction.js \
	CoreAnimation/caanimationdelegate.js \
	CoreAnimation/calayerdelegate.js \
	CoreAnimation/caconstraint.js \
	CoreAnimation/caconstraintlayoutmanager.js \
	CoreAnimation/carenderer.js \
	CoreAnimation/caanimation.js \
	CoreAnimation/caanimationgroup.js \
	CoreAnimation/cabasicanimation.js \
	CoreAnimation/cakeyframeanimation.js \
	CoreAnimation/capropertyanimation.js \
	CoreAnimation/cadisplaylink.js \
	CoreAnimation/caemittercell.js \
	CoreAnimation/calayer.js \
	CoreAnimation/caeagllayer.js \
	CoreAnimation/caemitterlayer.js \
	CoreAnimation/cagradientlayer.js \
	CoreAnimation/careplicatorlayer.js \
	CoreAnimation/cascrolllayer.js \
	CoreAnimation/cashapelayer.js \
	CoreAnimation/catextlayer.js \
	CoreAnimation/catiledlayer.js \
	CoreAnimation/catransformlayer.js \
	CoreAnimation/camediatimingfunction.js \
	CoreAnimation/catransaction.js \
	CoreAnimation/catransition.js \
	CoreAnimation/cavaluefunction.js

FRAMEWORK_SOURCES_CoreLocation= \
	CoreLocation/clgeocoder.js \
	CoreLocation/clheading.js \
	CoreLocation/cllocation.js \
	CoreLocation/cllocationmanager.js \
	CoreLocation/cllocationmanagerdelegate.js \
	CoreLocation/clplacemark.js \
	CoreLocation/clregion.js

FRAMEWORK_SOURCES_Twitter= \
	Twitter/twrequest.js \
	Twitter/twtweetcomposeviewcontroller.js

FRAMEWORK_SOURCES_UIKit= \
	UIKit/uitextviewdelegate.js \
	UIKit/uiwebviewdelegate.js \
	UIKit/uiapplicationdelegate.js \
	UIKit/uiactionsheetdelegate.js \
	UIKit/uiaccelerometerdelegate.js \
	UIKit/uialertviewdelegate.js \
	UIKit/uisearchdisplaydelegate.js \
	UIKit/uipopovercontrollerdelegate.js \
	UIKit/uiprintinteractioncontrollerdelegate.js \
	UIKit/uidocumentinteractioncontrollerdelegate.js \
	UIKit/uitabbardelegate.js \
	UIKit/uiscrollviewdelegate.js \
	UIKit/uipickerviewdelegate.js \
	UIKit/uitabbarcontrollerdelegate.js \
	UIKit/uipageviewcontrollerdelegate.js \
	UIKit/uinavigationbardelegate.js \
	UIKit/uinavigationcontrollerdelegate.js \
	UIKit/uivideoeditorcontrollerdelegate.js \
	UIKit/uiimagepickercontrollerdelegate.js \
	UIKit/uitextfielddelegate.js \
	UIKit/uigesturerecognizerdelegate.js \
	UIKit/uiappearance.js \
	UIKit/uitextinput.js \
	UIKit/uikeyinput.js \
	UIKit/uitableviewdatasource.js \
	UIKit/uitableviewdelegate.js \
	UIKit/uitextinputtraits.js \
	UIKit/uiedgeinsets.js \
	UIKit/uioffset.js \
	UIKit/uisearchdisplaycontroller.js \
	UIKit/uiprintpaper.js \
	UIKit/uiprintpagerenderer.js \
	UIKit/uiprintinteractioncontroller.js \
	UIKit/uiprintinfo.js \
	UIKit/uipopovercontroller.js \
	UIKit/uipasteboard.js \
	UIKit/uinib.js \
	UIKit/uistoryboard.js \
	UIKit/uistoryboardsegue.js \
	UIKit/uistoryboardpopoversegue.js \
	UIKit/uiprintformatter.js \
	UIKit/uiviewprintformatter.js \
	UIKit/uisimpletextprintformatter.js \
	UIKit/uimarkuptextprintformatter.js \
	UIKit/uidevice.js \
	UIKit/uidocument.js \
	UIKit/uimanageddocument.js \
	UIKit/uidocumentinteractioncontroller.js \
	UIKit/uievent.js \
	UIKit/uitouch.js \
	UIKit/uifont.js \
	UIKit/uiimage.js \
	UIKit/uiscreen.js \
	UIKit/uiscreenmode.js \
	UIKit/uilocalizedindexcollation.js \
	UIKit/uilocalnotification.js \
	UIKit/uimenucontroller.js \
	UIKit/uimenuitem.js \
	UIKit/uiresponder.js \
	UIKit/uiview.js \
	UIKit/uicanvasview.js \
	UIKit/uiwebview.js \
	UIKit/uitoolbar.js \
	UIKit/uitableviewcell.js \
	UIKit/uitabbar.js \
	UIKit/uisearchbar.js \
	UIKit/uiscrollview.js \
	UIKit/uitextview.js \
	UIKit/uitableview.js \
	UIKit/uiprogressview.js \
	UIKit/uipopoverbackgroundview.js \
	UIKit/uipickerview.js \
	UIKit/uiimageview.js \
	UIKit/uilabel.js \
	UIKit/uiwindow.js \
	UIKit/uiviewcontroller.js \
	UIKit/uitableviewcontroller.js \
	UIKit/uitabbarcontroller.js \
	UIKit/uisplitviewcontroller.js \
	UIKit/uireferencelibraryviewcontroller.js \
	UIKit/uipageviewcontroller.js \
	UIKit/uinavigationbar.js \
	UIKit/uinavigationcontroller.js \
	UIKit/uinavigationitem.js \
	UIKit/uivideoeditorcontroller.js \
	UIKit/uiimagepickercontroller.js \
	UIKit/uicontrol.js \
	UIKit/uitextfield.js \
	UIKit/uitextinputmode.js \
	UIKit/uitextinputstringtokenizer.js \
	UIKit/uitextposition.js \
	UIKit/uitextrange.js \
	UIKit/uiswitch.js \
	UIKit/uistepper.js \
	UIKit/uislider.js \
	UIKit/uisegmentedcontrol.js \
	UIKit/uipagecontrol.js \
	UIKit/uibaritem.js \
	UIKit/uitabbaritem.js \
	UIKit/uiacceleration.js \
	UIKit/uiaccelerometer.js \
	UIKit/uiaccessibilityelement.js \
	UIKit/uiactionsheet.js \
	UIKit/uiactivityindicatorview.js \
	UIKit/uialertview.js \
	UIKit/uiapplication.js \
	UIKit/uibarbuttonitem.js \
	UIKit/uibezierpath.js \
	UIKit/uibutton.js \
	UIKit/uicolor.js \
	UIKit/uidatepicker.js \
	UIKit/uigesturerecognizer.js \
	UIKit/uitapgesturerecognizer.js \
	UIKit/uipinchgesturerecognizer.js \
	UIKit/uirotationgesturerecognizer.js \
	UIKit/uiswipegesturerecognizer.js \
	UIKit/uipangesturerecognizer.js \
	UIKit/uilongpressgesturerecognizer.js

all::

clean:
	-rm -rf $(DEST_DIR)


### you really shouldn't need to touch any of this stuff..

DEST_EXTRA_FILES=$(EXTRA_FILES:%.js=$(DEST_DIR)/%.js)

all:: $(DEST_EXTRA_FILES)

define Framework
$(eval FRAMEWORK_FILE_$(1) := $(shell echo $1 | tr "[:upper:]" "[:lower:]").js)
$(eval FRAMEWORK_JS_FILE_$(1) := $(shell echo $1 | tr "[:upper:]" "[:lower:]").js)

$(eval FRAMEWORK_SOURCES_$(1) ?= $(wildcard $(1)/*.js))

$(DEST_DIR)/$(FRAMEWORK_JS_FILE_$(1)): $(FRAMEWORK_FILE_$(1)) $(FRAMEWORK_SOURCES_$(1))
# the extra $(1) here is so that the coffeescript compiler still tries to compile the $(FRAMEWORK_FILE_$(1)).
	@mkdir -p $(DEST_DIR)
	@echo [GEN $(1)] && cat $(FRAMEWORK_FILE_$(1)) $(FRAMEWORK_SOURCES_$(1)) > $(DEST_DIR)/$(FRAMEWORK_JS_FILE_$(1)) 

all:: $(DEST_DIR)/$(FRAMEWORK_JS_FILE_$(1))
endef


$(foreach framework,$(BOUND_FRAMEWORKS),$(eval $(call Framework,$(framework))))

$(DEST_DIR)/%.js: %.js
	@mkdir -p $(DEST_DIR)
	@echo [GEN $<] && cp $< $@

