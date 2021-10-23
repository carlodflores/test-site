<template>
	<div v-if="landing !== null" class="container">
		<section id="hero">
			<img class="demo-hero" src="~/assets/img/hero.png" alt="">
			<div class="content">
				<img :src="media(landing.heroImg[0].url)" alt="">
				<h1 v-if="landing.title">{{ landing.title }}</h1>
				<p v-if="landing.subtitle">{{ landing.subtitle }}</p>
			</div>
		</section>

		<section id="intro">
			<div v-if="landing.intro[0]" class="card">
				<div class="text-center">
					<img :src="media(landing.intro[0].emoji[0].url)" alt="">
				</div>
				
				<h1>{{ landing.intro[0].title }}</h1>
				<p>{{ landing.intro[0].description }}.</p>
			</div>

			<div v-if="landing.intro[1]" class="card">
				<div class="text-center">
					<img :src="media(landing.intro[1].emoji[0].url)" alt="">
				</div>
				
				<h1>{{ landing.intro[1].title }}</h1>
				<p>{{ landing.intro[1].description }}.</p>
			</div>

			<div v-if="landing.intro[2]" class="card">
				<div class="text-center">
					<img :src="media(landing.intro[2].emoji[0].url)" alt="">
				</div>
				
				<h1>{{ landing.intro[2].title }}</h1>
				<p>{{ landing.intro[2].description }}.</p>
			</div>
		</section>

		<section id="feature-1">
			<section class="content">
				<h1>Feature</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta!</p>
				<a href="#subscribe"><button class="btn">Request for a Demo</button></a>
				<img src="~/assets/img/demo.png" alt="">
			</section>
		</section>

		<section id="subscribe">
			<section class="content">
				<img src="~/assets/img/mail.png" alt="">
				<h1>Subscribe</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel?</p>

				<div v-if="!subStatus" class="form">
					<input v-model="emailInput" type="text" @keyup="createSubscription" >
					<button @click="createSubscription"><img src="~/assets/img/check.png" alt=""></button>
				</div>

				<div v-if="subStatus" class="text-center" style="padding: 20px 0px; opacity: 1 !important;">
					<p  style="opacity: 1 !important; font-size: 24px;">✅ Successfully Subscribed</p>
				</div>
			</section>
		</section>

		<section id="footer" class="text-center">
			2021
		</section>
	</div>
</template>

<script>
	export default {
		async asyncData({ $strapi }) {
			const landing = await $strapi.find('landing-page');

			return {
				landing
			}
		},

		data() {
			return {
				emailInput: '',
				subStatus: false,
			}
		},
		

		head: {
			title: 'Todo App',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap' },
			]
		},

		created() {
			
		},

		mounted () {
			// eslint-disable-next-line no-console
			console.log(this.landing);
		},

		methods: {
			media(url) {
				return 'http://localhost:3030' + url
			},

			createSubscription(e) {
				if(e.keyCode !== 13
				|| this.emailInput === '') return false;

				this.$strapi.create('subscriptions', {
					email: this.emailInput
				});
				
				this.subStatus = true;
			}
		}
	}
</script>

<style lang="scss">

	html, body {
		margin: 0;
		padding: 0;
	}

	*, *::before, *::after {
		box-sizing: border-box;
		font-family: 'Poppins';
	}

	body {
		background-color: #232323;
		color: #fff;
		overflow-x: hidden;
	}

	section {
		max-width: 960px;
		width: 960px;
		margin: 0 auto;
		position: relative;
		z-index: 10;
	}

	#hero {
		position: relative;
		margin-top: 0px;
		top :0;

		.demo-hero {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 2;
		}

		.content {
			padding-left: 40%;
			padding-top: 10%;
			position: relative;
			z-index: 3;

			h1 {
				font-size: 72px;
				margin: 0px;
				line-height: 70px;
			}

			p {
				opacity: .5;
				margin: 0;
				font-size: 18px;
			}
		}
	}

	#intro {
		padding: 130px 0 0 0;
		display: flex;
		flex: 1 1 100%;
		gap: 20px;
	
		.card {
			transition: all 0.5s ease;

			&:hover {
				background-color: cyan;
				color: #000;

				h1 {
					color: #000;
				}
			}

			img {
				margin-bottom: 20px;
			}

			h1 {
				color: cyan;
				margin: 0;
				transition: all 0.5s ease;
			}

			p {
				margin: 0;
				transition: all 0.1s ease;
			}
		}
	}

	#feature-1 {
		background-color: #333333;
		padding: 120px 0 500px 0;
		width: 107% !important;
		max-width: 107% !important;
		margin-top: -70px;
		transform: rotate(-3deg);
		position: relative;
		z-index: 1;
		margin-left: -50px;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			background-image: url('~/assets/img/check-cool-bg.png');
			background-repeat: no-repeat;
			background-position: left 110%;
			width: 100%;
			height: 100%;
		}

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			background-image: url('~/assets/img/check-cool-bg.png');
			background-repeat: no-repeat;
			background-position: right -10%;
			width: 100%;
			height: 100%;
		}

		.content {
			transform: rotate(3deg) !important;
			text-align: center;
			position: relative;
			z-index: 20;

			h1 {
				font-size: 72px;
				margin: 0;
				line-height: 70px;
			}

			p {
				margin: 0;
				opacity: .5;
			}

			.btn {
				margin-top: 20px;
			}

			img {
				position: absolute;
				left: 50%;
				margin-top: 100px;
				transform: translateX(-50%);
			}
		}
	}
	#subscribe {
		background-color: #00ffff8f;
		padding: 70px 0 100px 0;
		width: 107% !important;
		max-width: 107% !important;
		margin-top: 150px;
		transform: rotate(3deg);
		position: relative;
		z-index: 20;
		margin-left: -50px;

		.content {
			transform: rotate(-3deg) !important;
			text-align: center;
			position: relative;

			h1 {
				font-size: 72px;
				margin: 0;
				line-height: 70px;
			}

			p {
				margin: 0;
				opacity: .5;
			}

			.form {
				margin: 0 auto;
				margin-top: 50px;
				position: relative;
				width: 50%;

				input {
					padding-right: 65px;
				}

				button {
					position: absolute;
					right: 20px;
					z-index: 50;
					top: 50%;
					transform: translateY(-50%);
					border: none;
					background: transparent;
					padding: 0;
					margin: 0;
				}
			}
		}
	}

	#footer {
		padding: 50px 0;
	}

	.card {
		background-color: #434343;
		padding: 25px;
		width: 100%;
		border-radius: 8px;
	}

	.text-center {
		text-align: center;
	}

	.btn {
		padding: 15px 20px;
		border: none;
		background: cyan;
		border-radius: 8px;
		position: relative;
		transition: all 0.5s ease;
		z-index: 10;
		
		&:hover {
			opacity: 0.7;
		}
	}

	input {
		background: #232323;
		padding: 20px;
		border: 1px solid transparent;
		border-radius: 8px;
		color: #fff;
		width: 100%;
		position: relative;
		z-index: 12;
		font-size: 18px;
		font-weight: 400;

		&:focus {
			outline: none;
			border: 1px solid cyan;
		}
	}
</style>