//your JS code here. If required.


document.getElementById("btn").addEventListener("click",(event)=>{
	event.preventDefault()
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;

	new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve()
			}else{
				reject()
			}
		},4000)
	}).then(()=>{
		alert(`Welcome, ${name}. You can vote.`)
	}).catch(()=>{
		alert(`Oh sorry ${name}. You aren't old enough.`)
	})
	
	
})