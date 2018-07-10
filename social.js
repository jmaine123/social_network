alert('JavaScript is working')

totalUsers = 0;
user ={};

function createUser(name){
  totalUsers+=1;
  propertyName = 'user' + totalUsers;

  user[totalUsers] = {
    name: name,
    id: totalUsers
  }
}


function post(){
  var firstName = document.getElementById('name').value;
  var date = document.getElementById('date').value
  createUser(firstName);
  console.log(firstName)
  var postItem = document.createElement('li');
  var message = document.getElementById('opinion').value;
  var finalpost = date + ' - ' +firstName + ': ' + message;


  postItem.append(finalpost);
  console.log(postItem);
  var page2 = document.getElementById('postings');
  page2.append(postItem);

}
