//player object
const player = {
	character : $("#player"),
	playerPos : 0
}

console.log(player)


//ai object

const ai = {
	character : $("#ai"),
	aiPos : 0,
	aiPosMed: 0,
	aiPosHard: 0
}


console.log(ai)


let playerPosition = 0 
let aiPosition = 0
let aiPositionM = 0
let aiPositionH = 0

//move the player function
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
	})

	$("#medium").click(function() {
		aiMoveMedium()
	})

	$("#hard").click(function() {
		aiMoveHard()
	})
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
	setTimeout(aiMove, 1000)
	result1()
	
}
//medium
const aiMoveMedium = () => {
		if(ai.aiPosMed < 1000) {
			ai.character.animate ({
				'left' :(aiPositionM += 150) + 'px'
			})
		} else {
			return true
		}
	console.log(ai.aiPosMed)
	ai.aiPosMed = aiPositionM	
	setTimeout(aiMoveMedium, 500)
	result2()
}
//hard
const aiMoveHard = () => {
		if(ai.aiPosHard < 1000) {
			ai.character.animate ({
				'left' :(aiPositionH += 200) + 'px'
			})
		} else {
			return true
		}
	console.log(ai.aiPosHard)
	ai.aiPosHard = aiPositionH
	setTimeout(aiMoveHard, 250)
	result3()
}





const result = () => {
	if(player.playerPos === 1000) {
		alert('player won!')
		return true
	}
}

const result1 = () => {
	if(ai.aiPos === 1000) {
		alert('ai won!')
		return true
	}
}

const result2 = () => {
	if(ai.aiPosMed === 1000) {
		alert('ai won!')
		return true
	}
}

const result3 = () => {
	if(ai.aiPosHard === 1000) {
		alert('ai won!')
		return true
	}
}









