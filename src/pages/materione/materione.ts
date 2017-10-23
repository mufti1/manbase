import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the MaterionePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materione',
  templateUrl: 'materione.html',
})
export class MaterionePage {

	public items : any  = [];
	public juduls : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterionePage');
  }

  ionViewWillEnter(){
  	this.judulLoad();
  	this.contentLoad();
  }

  judulLoad(){
  	this.http.get('https://manbase.ga/materi1.php')
  	.map(res => res.json())
  	.subscribe(data=> {
  		this.juduls = data;
  	});
  }

  contentLoad(){
  	this.http.get('https://manbase.ga/materi1.php')
  	.map(res => res.json())
  	.subscribe(data=> {
  		this.items = data;
  	});
  }

}
