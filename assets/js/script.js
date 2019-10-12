// player object
const player = {
	character : $("#player"),
	playerPos : 0
}

console.log(player)


// ai object

const ai = {
	character : $("#ai"),
	aiPos : 0
}

const ai2 = {
	character: $("#ai2"),
	aiPos : 0
}

const ai3 = {
	character: $("#ai3"),
	aiPos : 0
}

const ai4 = {
	character: $("#ai4"),
	aiPos : 0
}



console.log(ai)
console.log(ai2)
console.log(ai3)
console.log(ai4)


let playerPosition = 0 
let aiPosition = 0
let aiPosition2 = 0
let aiPosition3 = 0
let aiPosition4 = 0


// move the player function
player.character.click(function() {


	$(this).animate({
		'left' : (playerPosition += 100) + 'px'
	})
	player.playerPos = playerPosition
	console.log('this is the current value of player position ' + playerPosition)
	result()
})













































 // move the ai function
	$("#start").click(function() {
		aiMove()
		aiMove2()
		aiMove3()
		aiMove4()
	})

	$("#medium").click(function() {
		aiMoveMed()
		aiMoveMed2()
		aiMoveMed3()
		aiMoveMed4()
	})

	$("#hard").click(function() {
		aiMoveHard()
		aiMoveHard2()
		aiMoveHard3()
		aiMoveHard4()
	})

	//end

	





































//easy
const aiMove = () => {
		if(ai.aiPos < 1000) {
			ai.character.animate({
			'left' : (aiPosition += 50) + 'px'
		})
	} else {
		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition	
	setTimeout(aiMove, 1000) /*Makes the timeout*/
	result1()
	
}

const aiMove2 = () => {
	if(ai2.aiPos < 1000) {
		ai2.character.animate({
			'left' : (aiPosition2 += 50) + 'px'
		})
	} else {
		return true
	}
	console.log(ai2.aiPos)
	ai2.aiPos = aiPosition
	setTimeout(aiMove2, 1000) /*Makes the timeout*/
	result1()
}

const aiMove3 = () => {
	if(ai3.aiPos < 1000) {
		ai3.character.animate({
			'left' : (aiPosition3 += 50) + 'px'
		})
	} else {
		return true
	}
	console.log(ai3.aiPos)
	ai3.aiPos = aiPosition
	setTimeout(aiMove3, 1000) /*Makes the timeout*/
	result1()
}

const aiMove4 = () => {
	if(ai4.aiPos < 1000) {
		ai4.character.animate({
			'left' : (aiPosition4 += 50) + 'px'
		})
	} else {
		return true
	}
	console.log(ai4.aiPos)
	ai4.aiPos = aiPosition
	setTimeout(aiMove4, 1000) /*Makes the timeout*/
	result1()
}
//end of easy










































// medium
const aiMoveMed = () => {
		if(ai.aiPos < 1000) {
			ai.character.animate({
			'left' : (aiPosition += 100) + 'px'
		})
	} else {
		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition	
	setTimeout(aiMoveMed, 1000) /*Makes the timeout*/
	result1()
	
}

const aiMoveMed2 = () => {
	if(ai2.aiPos < 1000) {
		ai2.character.animate({
			'left' : (aiPosition2 += 100) + 'px'
		})
	} else {
		return true
	}
	console.log(ai2.aiPos)
	ai2.aiPos = aiPosition
	setTimeout(aiMoveMed2, 1000) /*Makes the timeout*/
	result1()
}

const aiMoveMed3 = () => {
	if(ai3.aiPos < 1000) {
		ai3.character.animate({
			'left' : (aiPosition3 += 100) + 'px'
		})
	} else {
		return true
	}
	console.log(ai3.aiPos)
	ai3.aiPos = aiPosition
	setTimeout(aiMoveMed3, 1000) /*Makes the timeout*/
	result1()
}

const aiMoveMed4 = () => {
	if(ai4.aiPos < 1000) {
		ai4.character.animate({
			'left' : (aiPosition4 += 100) + 'px'
		})
	} else {
		return true
	}
	console.log(ai4.aiPos)
	ai4.aiPos = aiPosition
	setTimeout(aiMoveMed4, 1000) /*Makes the timeout*/
	result1()
}
//end of medium
















































// hard
const aiMoveHard = () => {
		if(ai.aiPos < 1000) {
			ai.character.animate({
			'left' : (aiPosition +=150) + 'px'
		})
	} else {
		return true
		alert("ai won!")
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition	
	setTimeout(aiMoveHard, 1000) /*Makes the timeout*/
	// result1()
	
}

const aiMoveHard2 = () => {
	if(ai2.aiPos < 1000) {
		ai2.character.animate({
			'left' : (aiPosition2 += 150) + 'px'
		})
	} else {
		return true
		alert("ai won!")
	}
	console.log(ai2.aiPos)
	ai2.aiPos = aiPosition
	setTimeout(aiMoveHard2, 1000) /*Makes the timeout*/
	// result1()
}

const aiMoveHard3 = () => {
	if(ai3.aiPos < 1000) {
		ai3.character.animate({
			'left' : (aiPosition3 += 150) + 'px'
		})
	} else {
		return true
		alert("ai won!")
	}
	console.log(ai3.aiPos)
	ai3.aiPos = aiPosition
	setTimeout(aiMoveHard3, 1000) /*Makes the timeout*/
	// result1()
}

const aiMoveHard4 = () => {
	if(ai4.aiPos < 1000) {
		ai4.character.animate({
			'left' : (aiPosition4 += 150) + 'px'
		})
	} else {
		return true
		alert("ai won!")
	}
	console.log(ai4.aiPos)
	ai4.aiPos = aiPosition
	setTimeout(aiMoveHard4, 1000) /*Makes the timeout*/
	// result1()
}
// end of hard













//player result
const result = () => {
	if(player.playerPos === 1000) {
		alert('player won!')
		return true
	}
}



















// easy
const result1 = () => {
	if(ai.aiPos === 1000) {
		alert('ai won!')
		return true
	} else if (ai2.aiPos === 1000) {
		alert('ai won!')
	} else if (ai3.aiPos === 1000) {
		alert('ai won!')
	} else if (ai4.aiPos === 1000) {
		alert('ai won!')
	}
}














