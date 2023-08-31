import DialogsReducer from "./Redux/DialogsReducer";
import MainReducer from "./Redux/MainReducer";
import SidebarReducer from "./Redux/SidebarReducer";

let Store = {
   _State: {
      HeaderPage: {
         img: "https://www.designmantic.com/images/how-to/circle-image-4.png",
         logo: "Sorry, some Error"
      },
      SidebarPage: {
         Sidebar: [
            { text: "Profile", src: "/Profile" },
            { text: "Dialogs", src: "/Dialogs" },
            { text: "News ", src: "News" },
            { text: "Music", src: "Music" },
            { text: "Setting", src: "Setting" }
         ],
         Friends: [
            { id: 1, name: 'Vlad', img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chipmunk-nature-photos-1537973822.jpg' },
            { id: 2, name: 'Natan', img: 'https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            { id: 3, name: 'Danik', img: 'https://i.insider.com/5c79a8cfeb3ce837863155f5?width=1000&format=jpeg&auto=webp' },
         ]
      },
      MainPage: {
         HeaderImg: {
            img: "https://i.pinimg.com/originals/da/95/94/da95945e54c10a0f67e604f7f22a79e2.jpg",
            text: "Soory,something broke"
         },
         MainBIO: {
            name: "Stanislav Naumovich",
            birthday: "28 January",
            city: "Minsk",
            education: "BSEU",
            inst: "stasidla1",
            src: "https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=",
            alt: "Sorry, something go wrong"
         },
         MainComment: [
            { id: 1, comment: "Hello World", likeCount: 22, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chipmunk-nature-photos-1537973822.jpg" },
            { id: 2, comment: "This first stape", likeCount: 14, img: "https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
            { id: 0, comment: "To be continue...", likeCount: 122, img: "https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=" },
         ],
         TextArea: "Write something"
      },
      DialogsPage: {
         EnterMessage: [
            { message: "Hello man" },
            { message: "How do you feel yourself?" },
            { message: "I'm good,may be cinema today?" }
         ],
         AnswerMessage: [
            { message: "What's up man" },
            { message: "All is good,and you?" },
            { message: "Sorry,but not today" }
         ],

         Chats: [
            { id: 1, name: 'Vlad', img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chipmunk-nature-photos-1537973822.jpg' },
            { id: 2, name: 'Natan', img: 'https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            { id: 3, name: 'Danik', img: 'https://i.insider.com/5c79a8cfeb3ce837863155f5?width=1000&format=jpeg&auto=webp' },
            { id: 4, name: 'Sasha', img: 'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/1504106954-monkey.jpg' },
            { id: 5, name: 'Oleg', img: 'https://media.npr.org/assets/img/2022/12/09/meerkat-654245859650e9e9185bf2fcb69267343c4f538b-s1100-c50.jpg' },
         ],
         MessageArea: "Your message",

      }

   },


   getState() {
      return this._State
   },
   RerenderEnriesTree() {

   },
   subscribe(obsition) {
      this.RerenderEnriesTree = obsition;
   },




   dispatch(action) {
      this._State.DialogsPage = DialogsReducer(this._State.DialogsPage, action);
      this._State.MainPage = MainReducer(this._State.MainPage, action);
      this._State.SidebarPage = SidebarReducer(this._State.SidebarPage, action);
      this.RerenderEnriesTree()
   },
}

export default Store