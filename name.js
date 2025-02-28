const userName ={
  first:'vansh',
  lastname:' kushwaha',
  full: function (){
    return this.first + this.lastname
  }
}
console.log(userName.full())