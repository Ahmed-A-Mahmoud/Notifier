import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient , HttpHeaders} from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: HttpClient) {

  }

  sendNotification() 
  {  
  let body = {
      "notification":{
        "title":"New Notification has arrived",
        "body":"Notification Body",
        "sound":"enabled",
        "click_action":"FCM_PLUGIN_ACTIVITY",
        "icon":"drawable-hdpi-icon"
      },
      "data":{
        "param1":"value1",
        "param2":"value2"
      },
        "to":"/topics/all",
        "priority":"high",
        "restricted_package_name":""
    }
    let options = new HttpHeaders().set('Content-Type','application/json');
    this.http.post("https://fcm.googleapis.com/fcm/send",body,{
      headers: options.set('Authorization', 'key=AAAAKAxjJwY:APA91bEfWiPXewKlIjvQy1kU5jEqZtBZWw6rWRQOBIesv3bmDzzExIQmOJhyZ_jgubS9T90k-XA7wTt-v8KxZwsRXf8MXCwO-oUPdJ3L7-XabAK3xsPAm8klUSRrBXnXF89fCl4t2_AXxFiLwkQahoeju1GWCYglYQ'),
    })
      .subscribe();
  }

}
