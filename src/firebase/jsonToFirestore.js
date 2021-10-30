const firebase = require("firebase");

require("firebase/firestore");

//inicializamos la app con nuestras credenciales
firebase.initializeApp({
    apiKey: "AIzaSyB6ZsuwGRWoFrHoIIHc8h7qZY1wuLwqhN8",
    authDomain: "the-good-tennis.firebaseapp.com",
    projectId: "the-good-tennis",
    storageBucket: "the-good-tennis.appspot.com",
    messagingSenderId: "667227144431",
    appId: "1:667227144431:web:0bc446c95435f004fc1b1a"
});

var db = firebase.firestore();

const PRODUCTS = [
	{
		"title": "Babolat Pure Aero",
		"price": 229,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1Ke-Py_J_74mgfJZZvCBJ-uizi_IAfkiT",
		"index": 1,
		"stock": 10,
		"category": "racquets",
		"brand":"Babolat",
		"description": "Specializing in spin and power, the Babolat Pure Aero is one of the game's most legendary racquets. At 11.2 ounces strung, this stick is ideal for hard charging intermediate players, but it should also work very well for the advanced ball striker who is looking to go on offense. Like the player who endorses this racquet (Rafael Nadal), the Pure Aero feels fast and explosive from the baseline. The speedy response and grippy stringbed provide the recipe for hitting heavy spin-loaded balls that drop hard, and the higher trajectory response makes it easy to keep the ball deep. The mid 320 swingweight draws a nice compromise between speed and stability, and the quick handling makes this a great stick for those who like chasing down balls or ripping winners on the run. At net the Pure Aero plays great on fast exchanges, and there is enough power to finish points with a bang. Ultimately, The Pure Aero remains a very obvious choice for aggressive baseliners looking to control the action with pace and spin."
	},
	{
		"title": "Babolat Pure Drive 2021",
		"price": 229,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1QiX0VeuGzWU-4OH75jyDmunQ1DDrgKbA",
		"index": 2,
		"stock": 7,
		"category": "racquets",
		"brand":"Babolat",
		"description": "Babolat adds another chapter to the game's most iconic modern player's racquet. As with previous versions of the Pure Drive, this update keeps the same easy learning curve and explosive spec profile that has attracted generations of players. On court, this racquet's explosive acceleration and spin-friendly targeting make it a dangerous weapon from the baseline. It also packs impressive all-court mobility, making it great for cranking winners on the run or charging into the front court and finishing points at net. With incremental tweaks to the feel, this update won't disappoint especially if you place a premium on quick handling. The Pure Drive continues to be one of the best options for those who want a light and explosive player's racquet."
	},
	{
		"title": "Babolat Pure Strike 16x19 3rd Gen",
		"price": 219,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1Skzb4S-jKvVX7vyAJ7rhdhKMJxVRGgav",
		"index": 3,
		"stock": 3,
		"category": "racquets",
		"brand":"Babolat",
		"description": "With this racquet, Babolat updates the popular Pure Strike 16x19 with a new dampening technology while keeping the seductive playability of the previous generation. From the baseline the Pure Strike 16x19 feels solid and surgical. It offers the spin-friendly precision of the Pure Drive but with a softer response and better ball feedback. The higher swingweight of this 3rd Gen version comes in handy when battling against higher levels of pace or driving the ball through the court. At net the Pure Strike offers the best of both worlds. It comes around with decent speed but it also feels stable against higher levels of pace, and it's versatile enough for finishing points with a bang or dropping the ball on a dime. With some incremental updates to the feel, the Pure Strike 16x19 remains one of the more seductive and user-friendly player's racquets in Babolat's line-up."
	},
	{
		"title": "Wilson Blade 98 16x19 v7",
		"price": 199,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1oMd_r6Kr2xS0XHCOEcsmH7zyHXxoeE7x",
		"index": 4,
		"stock": 5,
		"category": "racquets",
		"brand":"Wilson",
		"description": "With the 2019 update to the Blade 98 (16x19), Wilson doubles down on the outstanding feel for which the Blade series is known. Like the previous generation, this racquet combines the same elegant cosmetic and velvety paint finish that was originally launched with Federer's Pro Staff RF97 Autograph. From the baseline, this stick feels outstanding at ball impact, with greater pocketing and more detailed feedback than you get from a typical modern player's racquet. Aggressive ball strikers will find effective power on full swings, along with the needed control and spin to target the lines. At net, the Blade 98 (16x19) feels fast for the weight. Block volleys come off the racquet with decent pop and there is enough touch for sharp angles and malicious droppers. Players who can get this stick moving fast will find enough pace and spin on serve to force some weak replies, and there's just enough mass on service returns to comfortably redirect higher levels of pace. Players looking for a classic feeling Blade with some modern spin and power should be right at home with this very impressive update."
	},
	{
		"title": "Wilson Pro Staff RF97 v13",
		"price": 279,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1OiHez4DKOcNwf_GSpQHBxGdgByFCupRQ",
		"index": 5,
		"stock": 2,
		"brand": "Wilson",
		"category": "racquets",
		"description": "With the Pro Staff RF97 Autograph v13 Wilson updates Roger Federer's  racquet with a new cosmetic but keeps everything else the same, including the magical target specs and sublime feel that Roger Federer helped engineer with the original red/black version. From the baseline, the RF97's 12.6 ounce weight and beefy 330+ swingweight make it perfect for the advanced ball striker who wants stability. In addition to surgical control and mindless touch, player's who can leverage the mass will find heavy pace and plenty of put-away power. At net this stick does not get pushed around. Simple blocks result in penetrating replies, and there is enough touch and pop to hit every shot in the book. You'll also find the required power, spin and precision on serve to rack up free points. Ultimately, there is a reason why Wilson hasn't changed Federer's RF97 - you can't improve upon perfection. "
	},
	{
		"title": "Wilson Ultra 100 v3",
		"price": 229,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1ant2Vo5HpU5Kryqp8EL_Ta6Ep1vbAWTu",
		"index": 6,
		"stock": 7,
		"category": "racquets",
		"brand":"Wilson",
		"description": "Wilson adds another chapter to the Ultra 100. Like the previous generation, this racquet packs an 11.2 ounce strung weight and a powerful beam construction. It's also very maneuverable, giving it an appeal that extends from recreational players and weekend warriors all the way to intermediate league players. From the baseline the Ultra 100 feels crisp and lively, and it has enough spin-potential to bring the ball down effectively. Although it lacks the plow through and mass-based pop of a traditionally weighted player's racquet, this racquet's easy acceleration will help you scramble on defense or crank winners on the run. The speed continues at net where the Ultra 100 comes around very fast, making it great on reaction volleys. This racquet also shines on serve where it whips powerfully through contact to deliver easy targeting."
	},
	{
		"title": "Head Graphene 360+ Speed Pro",
		"price": 249,
		"thumbnail": "http://drive.google.com/uc?export=view&id=14mslD7crDLM1hqBoTDc2k-f__2rmrSGm",
		"index": 7,
		"stock": 5,
		"category": "racquets",
		"brand": "Head",
		"description": "This black cosmetic version of the Graphene 360+ Speed Pro has the same specs and playability as the standard cosmetic version. By combining a traditional 18x20 string pattern with a buttery 62-RA stiffness, this racquet gives experienced players an impressive combination of control and feel. From the baseline, the Speed Pro rewards full swings with a laser-like trajectory and pinpoint accuracy. It swings a tad heavier than the previous generation, making it slightly better at redirecting pace or driving the ball through the court. Although not as grippy as the Speed MP, our playtesters found enough spin-potential to bring the ball down effectively. At net, the Speed Pro comes around fast for the weight to deliver great touch and decent pop on punch volleys. It also shines on service returns where it not only feels solid on counterpunches and blocks but also delivers the kind of control that breeds confidence on aggressive replies."
	},
	{
		"title": "Head Radical Pro 2021",
		"price": 249,
		"thumbnail": "http://drive.google.com/uc?export=view&id=12Tl1BZ3V_-cNPHI1wiRzygnDcRImnIGF",
		"index": 8,
		"stock": 2,
		"category": "racquets",
		"brand":"Head",
		"description": "Head makes big changes to the Graphene 360+ Radical Pro, the heaviest member of the Radical family. Specializing in stability and controllable power, this 11.7 ounce racquet is ideal for strong intermediates and advanced players. In addition to adding 5 grams to the target weight, the 2021 Radical Pro gets a new mold along with a thinner beam and more arm-friendly flex rating. On groundstrokes the Radical Pro feels comfortable, solid and surgical. In addition to giving you enough plow-through to trade heavy balls with big hitters, you'll have the control to swing big and execute your most powerful strokes. At net, the Radical Pro has the needed mass to comfortably redirect higher levels of pace, and it has enough touch to drop the ball on a dime. It also shines on service returns where blocks, chips and counter-punches come off without a hitch. With some impressive updates to the beam construction and feel, the Radical Pro continues to be an obvious option for experienced players who want the perfect balance between power and control. The solid feel at impact is a nice bonus."
	},
	{
		"title": "Head Graphene 360+ Prestige Pro",
		"price": 199,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1TNtnNyEmLZYTrNy1R47w0ZYkxqguM1Lf",
		"index": 9,
		"stock": 3,
		"category": "racquets",
		"brand": "Head",
		"description": "Head adds another chapter to the Prestige Pro! With its 11.8 ounce strung weight and compact 95in² head, this stick feels solid and surgical at impact. On groundstrokes this racquet feels plush, lively and accurate. Compared to its predecessor, it does a slightly better job absorbing and redirecting pace, but it also manages to come around with decent speed. The open 16x19 pattern provides a higher trajectory than than the more classic Prestige MP, resulting in easier access to depth and juicier levels of spin. At net the Prestige Pro offers a nice compromise between speed and stability, and there is plenty of touch for dropping the ball short. On serve you'll find the precision to work the ball around the box, and there is enough pop to keep your opponent off balance. All in all, Head has produced an impressive update to the Prestige Pro. Offering a tad more stability than the previous generation, this racquet remains on obvious choice for those who crave that classic Prestige precision but also want higher, more modern levels of spin and power."
	},
	{
		"title": "Yonex VCORE PRO 97H 330 (2021)",
		"price": 249,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1h69YJIR9ZbwwM-31YyqMfNBBE5UBBftj",
		"index": 10,
		"stock": 7,
		"category": "racquets",
		"brand": "Yonex",
		"description": "Yonex adds another chapter to one of its most stable player’s racquets. Named the VCORE PRO 97H and endorsed by Stan Wawrinka, this model replaces the VCORE PPRO 97 (330). Like the previous generation this stick is designed for the advanced player who wants plow-through, precision and feel. From the baseline, this update feels solid as a rock, making it great for playing against heavy pace. In addition to its great feel and spin-friendly precision, the 97H delivers impressive power to those who can leverage its mass. It also feels stable when redirecting pace at net where the touch is outstanding. Ultimately, with some impressive updates to the beam construction and feel, the 97H continues to be a great choice for advanced players who want a racquet that does not get pushed around. "
	},
	{
		"title": "Yonex EZONE 98 Naomi Osaka LE",
		"price": 239,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1fBJLoSRBuckmHJ2b5kJ57O07WPAvGtr4",
		"index": 11,
		"stock": 1,
		"category": "racquets",
		"brand": "Yonex",
		"description": "Featuring a awesome white and gold, cosmetic, Yonex introduces a very special version of the EZONE 98 (305g). Commemorating the historic achievements of WTA phenom Naomi Osaka, this racquet features the same specs and playability of the original blue version. The EZONE 98 Naomi Osaka LE not only packs impressive spin and precision, it also has better touch and feel than many of its competitors. On groundstrokes the EZONE 98 Naomi Osaka LE feels fast, spin-friendly and very accurate.  Compared to the previous generation of the EZONE 98, this racquet is decidedly more responsive and plush in the upper hoop. At net the EZONE 98 plays great on reaction volleys, and it also has excellent placement and touch for those who like moving their opponents around. Aggressive servers will find the needed precision to swing  for power, and there is more than enough spin-potential to hit effective kickers and slices. Ultimately, with this impressive limited edition version of the EZONE 98, Yonex has delivered a great racquet to both tennis enthusiasts and collectors."
	},
	{
		"title": "Yonex VCORE 95",
		"price": 239,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1TgelVo620BhGRBfeSpx4nKNhigVagAIl",
		"index": 12,
		"stock": 8,
		"category": "racquets",
		"brand": "Yonex",
		"description": "Yonex adds another chapter to one of their most surgical player's racquets. It's called the VCORE 95 and it has been reengineered with a new beam construction and material technology. With its compact head, sub-325 swingweight and moderate stiffness level, this stick combines the traditional virtues of control and feel with impressive levels of speed and spin. On the court the VCORE 95 not only delivers outstanding ball feedback, the compact head makes it feel like a scalpel on full swings. The headlight balance and low swingweight translate seamlessly to hitting shots on the run or whipping up vicious head speed when loading the ball with spin. This stick also shines at net where it feels solid against pace while also moving quite fast when the pressure is on. With some impressive updates to the feel and beam construction, the VCORE 95 keeps getting better. Experienced players looking for a speedy and surgical midsize racquet with outstanding feel should start here."
	},
	{
		"title": "Tecnifibre TFight 305 RS",
		"price": 229.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1CmqADkB2pXLKkKpVXqz4_UzOHH5HLepM",
		"index": 13,
		"stock": 3,
		"category": "racquets",
		"brand": "Tecnifibre",
		"description": "Tecnifibre updates the TFight 305 RS with a new beam construction along with some updates to the feel.In contrast to the 16x19 string patterns on the other TFight models, the TFight 305 RS has a slightly more control oriented 18x19 string pattern, and it packs enough mass in the head to get the ball moving powerfully through the court. At net, the TFight 305 manages to offer impressive stability on block volleys while also remaining fluid enough for quick reactions, and it rewards strong servers with enough precision and power to impose their will. All in all, with its stable response, controllable power and great feel the TFight 305 RS remains a solid option for intermediate and advanced players. "
	},
	{
		"title": "Tecnifibre TF-X1 300",
		"price": 219.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=157-JNN7rgy60oef7qKo_qFkZ712_CYNO",
		"index": 14,
		"stock": 9,
		"category": "racquets",
		"brand": "Yonex",
		"description": "Introducing the TF-X1 300! With this racquet, Tecnifibre has created a modern player’s racquet with seductive levels of spin, power and comfort (emphasis on power). Boasting a sub-325 swingweight, this stick has impressive all-court speed, making it great for whipping up spin or reacting quickly when the pressure is on. On groundstrokes, this racquet offers an impressive combination speed, comfort and power, and it has enough spin potential to bring the ball down hard. The speedy feel not only makes it great for hitting shots on the run, but it also comes in handy at net where this stick comes around fast and plays great on heated exchanges. The TF-X1 shines on serve where it rewards high tip speed with a powerfully precise ball. Intermediate players looking for speedy modern player's racquet with easy targeting and above average comfort will love this one. "
	},
	{
		"title": "Tecnifibre TRebound 298 Iga",
		"price": 209.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=18kstM74LrrZ3Z_RmxVAhHTceDnZJmGwJ",
		"index": 15,
		"stock": 3,
		"category": "racquets",
		"brand": "Tecnifibre",
		"description": "Introducing the T-Rebound 298 IGA! With this racquet, Tecnifibre partners with rising WTA phenom Iga Swiatek to deliver a great combination of speed, precision and spin. Weighted for intermediate players, the T-Rebound 298 is tad lighter than a typical modern player's racquet, making it one of the speedier racquets in its class. From the baseline, the T-Rebound 298 IGA offers a crisp and lively response with easy targeting on full swings.  Like the best modern player's racquets, this stick accelerates with explosive speed, making it easier for you to generate pace and spin. Although not as heavy and stable as a traditional player's racquet, the T-Rebound 298 IGA feels solid for its weight while also offering advanced players plenty of room for weight customization. At net, this racquet comes around extremely fast, making it great on reaction volleys. The T-Rebound 298 IGA also shines on serve where you'll find enough spin and pop to put your opponent squarely on defense. Ultimately, with this light player's racquet, Tecnifibre has produced an impressive weapon for a wide range of players and ability levels. "
	},
	{
		"title": "Asics Gel Challenger 13 White/Black Men's Shoes",
		"price": 94.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1OimR-VJdMmdZa8n-QA68I_Z8aMP-A0kW",
		"index": 16,
		"stock": 3,
		"category": "shoes",
		"brand": "Asics",
		"description": "Asics takes some of the support, and stability features of the its iconic Gel Resolution, and creates a more flexible, comfortable, and budget-friendly option, with the Gel Challenger 13. New to this update, Wingwall technology has been placed on the lateral edge of the midsole, and maximizes the stability during those aggressive changes of direction. Signature GEL Cushioning remains intact allowing for excellent shock absorption. The durable AHARPLUS rubber outsole is formed into a modified herringbone pattern, for maximum traction and durability on a variety of court surfaces."
	},
	{
		"title": "Asics Gel Resolution 8 Black/Gecko Green Men's Shoes",
		"price": 134.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1ByiDPqGZ_BzM2zOyDDe9wQQJeoauSPIv",
		"index": 17,
		"stock": 6,
		"category": "shoes",
		"brand": "Asics",
		"description": "The Asics Gel Resolution 8 is loaded with support, stability and comfort, plus they happen to be some of the most durable shoes on the market. Designed with the help of WTA & ATP pros, like Gael Monfils, these shoes are great for any level player and they continue to evolve for the modern game and now are more flexible to move with your feet on those aggressive court cuts. Layers of cushioning underfoot help reduce harsh court shock while adding energy into each step."
	},
	{
		"title": "Asics Solution Speed FF 2 White/Classic Red Men's Shoes",
		"price": 124.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1F-UtbMhUlNb2Me9X_LjP-WhxFYzf8wet",
		"index": 18,
		"stock": 2,
		"category": "shoes",
		"brand": "Asics",
		"description": "There are a plethora of lightweight, speed-oriented performance shoes on the market, but not many can do what the Solution Speed FF 2 does! It remains light while still maintaining a high level of support, plus cushioning for the most aggressive movers. TheFlyteFoam midsole provides a smooth, plush ride while the Twisstruss system helps with stability for ultra-aggressive lateral cuts. One key improvement our testers found was the Flexion Fit upper material which contours to the foot better than before making movement seamless. Durability has been improved with added protection to the medial side for hard court sliders. The outsole provides a nice blend of grip, while not feeling overly sticky, catering to speedy players, like Alex de Minaur, who slide into their shots on gritty hard courts."
	},
	{
		"title": "Nike Air Zoom Vapor Pro White/Black Men's Shoe",
		"price": 120,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1Kni0w_8tuG-SPOYPFd7zNxb-1YOkJuC4",
		"index": 19,
		"stock": 1,
		"category": "shoes",
		"brand": "Nike",
		"description": "Players in search of premium lightweight performance can find it here, with the Air Zoom Vapor Pro! Worn on the pro tour by the likes of Nick Kyrgios, and Andrey Rublev. Nike has taken the best features of the shoe it replaces (the Vapor X) and adds in some new technology for the speediest Vapor yet! The upper has been redesigned and offers dual layers of support with a sock-like inner sleeve and a layer of durable mesh to assist in support and breathability. The asymmetrical lacing system has been strategically added for even more support when moving laterally. Players who have worn the Vapor X will recognize the midsole and outsole as a Zoom Air unit in the heel offers responsive cushioning underfoot while the generative outsole pattern enhances explosive directional changes. While not the most durable shoe in Nike's lineup, the outsole has been engineered with added tread in high-wear zones, and suits well for those players who slide into their shots!"
	},
	{
		"title": "Nike Air Zoom Vapor Pro Dark Teal/Green Men's Shoe",
		"price": 104.94,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1L0smth6YAdSKyjCPrjLzyy9uPAmuZfZT",
		"index": 20,
		"stock": 4,
		"category": "shoes",
		"brand": "Nike",
		"description": "Players in search of premium lightweight performance can find it here, with the Air Zoom Vapor Pro! Worn on the pro tour by the likes of Nick Kyrgios, and Andrey Rublev. Nike has taken the best features of the shoe it replaces (the Vapor X) and adds in some new technology for the speediest Vapor yet! The upper has been redesigned and offers dual layers of support with a sock-like inner sleeve and a layer of durable mesh to assist in support and breathability. The asymmetrical lacing system has been strategically added for even more support when moving laterally. Players who have worn the Vapor X will recognize the midsole and outsole as a Zoom Air unit in the heel offers responsive cushioning underfoot while the generative outsole pattern enhances explosive directional changes. While not the most durable shoe in Nike's lineup, the outsole has been engineered with added tread in high-wear zones, and suits well for those players who slide into their shots!"
	},
	{
		"title": "Babolat Jet Mach II Clay White/Navy/Orange Men's Shoes",
		"price": 140,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1fTNw2TKjqeEtRC5V6s_79vLTfGtnvjsZ",
		"index": 21,
		"stock": 3,
		"category": "shoes",
		"brand": "Babolat",
		"description": "With a new sleek design and improved performance, Babolat propels itself to the top of performance-oriented shoes with the Jet Mach II Clay. Made to increase lateral stability, this shoe incorporates a one-piece construction and an EVA foam pad to keep the foot locked in and comfortable. A Michelin rubber outsole continues to offer reliable resistance to the wear and tear of frequent play, keeping you on the court playing for as long as possible. With its technical look and natural feel, Babolat has produced a shoe that's sure to perform as good as it looks."
	},
	{
		"title": "Babolat Jet Mach III AC Green/Purple Men's Shoes",
		"price": 130,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1pq1rXkT1BOT13jUOSk18eVXs-H1wBQm4",
		"index": 22,
		"stock": 1,
		"category": "shoes",
		"brand": "Babolat",
		"description": "The Babolat Jet Mach III takes speed and agility to new heights. The upper comfortably supports your feet and has been designed to be more flexible, while maintaining the strength for aggressive court movements. Taking inspiration from their more stable shoe, the Propulse, the speedier Jet has a redesigned midsole with more cushioning and support compared to previous versions, which is noticeable from the first wear. Signature Michelin rubber is used to construct the outsole, maximizing durability of this lightweight shoe, and will have you ready for each start and stop!"
	},
	{
		"title": "Wilson Kaos Mirage White/Yellow Men's Shoe",
		"price": 169,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1z5HIJ8By9TX_dfEBCYSIwLSBC6rd2kBP",
		"index": 23,
		"stock": 4,
		"category": "shoes",
		"brand": "Wilson",
		"description": "The Wilson Kaos Mirage is innovative and speedy to help players take their on-court movement to new heights. With a sock-like feel and one-strap, players will feel snug and supported in these light shoes. A unique outsole pattern is constructed of durable rubber for durability and traction on any court surface."
	},
	{
		"title": "Wilson Rush Pro 3.5 Blue Men's Shoe",
		"price": 135,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1pwJucLOIGR8n_T1lTcCh302YbegFKcBg",
		"index": 24,
		"stock": 3,
		"category": "shoes",
		"brand": "Wilson",
		"description": "Continuing to evolve to match the needs of the modern game, the Rush Pro 3.5 continues to be a comfortable option for any level player. The comfortable mesh upper provides support while the Pro Torque Chassis technology holds your feet in place and offers stability for explosive footwork. Sensifeel cushioning adds layers of underfoot comfort and rebound. As with previous versions of this flagship Wilson shoe, the Duralast rubber outsole provides a superior level of abrasion resistance and traction for durability on any court surface. Backed by a 6-month outsole durability guarantee. "
	},
	{
		"title": "Wilson Kaos Swift Black/Orange/White Men's Shoe",
		"price": 129,
		"thumbnail": "http://drive.google.com/uc?export=view&id=13p8sThC5Ow21dozboSnDkj-mWwaxOgrB",
		"index": 25,
		"stock": 1,
		"category": "shoes",
		"brand": "Wilson",
		"description": "If speed is your thing, then the Kaos Swift just might be the best shoe for you! Quick and aggressive to help bring energy to your footwork. The lightweight upper is soft, breathable and flexible while the midsole provides loads of responsiveness and reduces harsh shock. You will feel secure and stable for quick, explosive court movement while the zonal outsole tread offers a blend of grip and give made from Duralast rubber for traction and durability on any court surface."
	},
	{
		"title": "Lacoste AG-LT 21 White/Green Men's Shoes",
		"price": 119.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=14Rf5gVKFyERaXMLXSV9_Qiz0U480gwqk",
		"index": 26,
		"stock": 7,
		"category": "shoes",
		"brand": "Lacoste",
		"description": "If you are a fan of the Lacoste style, and like a more flexible feeling shoe, with out of the box comfort, the Lacoste AG-LT 21 is the way to go! This version is a slightly more minimal version of the AG-LT 21 Ultra, and is a great choice for the club player looking for comfortable support.  The mesh panels on the upper will allow for plenty of breathability, while the cushioned ankle collar adds a comfortable and secure fit. Lateral stability is enhanced by the Pebax bridge located in the mid-foot region, and the outsole is equipped with Goodyear rubber in a modified herringbone for traction on a variety of surfaces."
	},
	{
		"title": "Lacoste AG-LT 21 Ultra Black/Yellow Men's Shoes",
		"price": 174.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1PDD5dSesqNyNFCV_hXLSuWXCykNKYFn5",
		"index": 27,
		"stock": 0,
		"category": "shoes",
		"brand": "Lacoste",
		"description": "Built for player’s who rely on speed, the Lacoste AG-LT 21 Ultra is sure to keep you feeling agile around the court, supported, and well ventilated. The helix-woven mesh uppers provide a nice contoured fit, while providing plenty of breathability, and the Kurim overlay around the toes provides durable drag protection. Lateral stability is enhanced by the Pebax bridge located in the mid-foot region, and also functions as an energy plate, to help surge you forward when chasing down the next ball. The outsole is designed for aggressive movements, and durable enough to withstand the grind of players like Daniil Medvedev. Featuring Goodyear rubber tread pods, you’ll be sure to have the grip, so that your wheels don’t slip!"
	},
	{
		"title": "Luxilon ALU Power 16/1.30 String Reel",
		"price": 301.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1B8uMgux6jPPEHW-nUsYjEgWeL5ayVoG0",
		"index": 28,
		"stock": 4,
		"category": "strings",
		"brand": "Luxilon",
		"description": "Luxilon releases a 16 gauge version ALU Power, one of the most popular tennis strings ever made. Offering a tad more control and durability than  ALU Power 16L, this string will let you swing even bigger when adding spin and pace to your shots (think heavy ball). In addition to being a great option for intermediate and advanced players, this is a must hit for fans of the original ALU Power 16L. "
	},
	{
		"title": "Babolat RPM Blast 16/1.30 String Reel",
		"price": 244.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=198hqXNhhxKEo8ww-CDyOCn0Y-l-i0c_B",
		"index": 29,
		"stock": 2,
		"category": "strings",
		"brand": "Babolat",
		"description": "The string of choice for Stan Wawrinka, this durable co-poly string is very, very spin friendly. The slick surface of RPM Blast allows the main strings to slide out of alignment, grab the ball and then snap back to add spin to the shot. While all co-poly monofilaments do this to some extent, our lab tests confirm that RPM Blast is exceptional in this regard. Though RPM Blast offers a slightly softer feel than traditional polyesters, it is by no means the softest co-poly available. It is an ideal choice for big hitters with heavier racquets seeking maximum control, durability, and spin. (And it seems to be working quite well for Rafa!)"
	},
	{
		"title": "Babolat Xcel 16/1.30 String Reel Blue",
		"price": 282.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1Zi754FYep2ZT3DM86kjcBtjfndi9gSiE",
		"index": 30,
		"stock": 5,
		"category": "strings",
		"brand": "Babolat",
		"description": "This soft and natural gut-like feeling string is a premium multifilament. Using polymid binds in lieu of polyurethane, Babolat was able to increase the durability and tension maintenance for extended life and playability. A great performance string as well as being arm friendly. While this one has more than enough pop for players with shorter strokes, the control is actually quite good for the breed."
	},
	{
		"title": "Solinco Hyper-G 16/1.30 String Reel",
		"price": 159.99,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1QoIuypLYAT0FNY3SPSujBFxQVIsKWY08",
		"index": 31,
		"stock": 6,
		"category": "strings",
		"brand": "Solinco",
		"description": "Solinco Hyper-G is a square shaped co-poly with an impressive combination of spin and precision. Developed for an ATP top 50 player, this medium firm string will allow big hitters to take massive cuts at the ball without having to worry about overhitting. Topspin players who like hitting balls that dive sharply and explode off the court should love this string."
	},
	{
		"title": "Solinco Tour Bite 16/1.30 String Reel",
		"price": 159.99,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1mqi36pIrONp0lB9ou38mtkm6_sHNZAlb",
		"index": 32,
		"stock": 2,
		"category": "strings",
		"brand": "Solinco",
		"description": "Solinco Tour Bite is a polyester monofilament that provides excellent control and remarkable spin. This explains why it is extremely popular at the collegiate level. Our testers noticed immediately how well the square profile gripped the ball. This is not only a perfect string for players seeking more control and spin, but it also packs a punch for those who favor a heavy ball."
	},
	{
		"title": "Solinco Outlast 16/1.30 String Reel",
		"price": 115,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1BW38pfQ6l2IOg1uFB73Wdp94Brafi2VU",
		"index": 33,
		"stock": 1,
		"category": "strings",
		"brand": "Solinco",
		"description": "The Solinco Outlast is a co-polyester string that offers a softer stringbed than traditional polyesters. We found the string to provide great bite on the ball, imparting tons of spin on our shots. Great on its own or as part of a hybrid, this string is perfect for the big all court player."
	},
	{
		"title": "Kirschbaum Pro Line II 16/1.30 String Reel",
		"price": 34,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1iPeTSINMFBYgOHhZe9dq79x1UXtDSwfG",
		"index": 34,
		"stock": 6,
		"category": "strings",
		"brand": "Kirschbaum",
		"description": "This is one of the softest and most responsive co-polyester strings offered by Kirschbaum. Compared to a traditional polyester string, Pro Line II offers better pocketing along with a more forgiving feel on off-center impact. This string has great durability and comes pre-stretched for better tension maintenance. This string's precise and predictable response will enable you to swing bigger when going for pace and spin. Ideal for intermediate and advanced players with long, fast strokes."
	},
	{
		"title": "Kirschbaum Pro Line II Rough 16/1.30 String Reel",
		"price": 85,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1dQe5PigRTXf8NOgkUYB5dssqrUG6Belb",
		"index": 35,
		"stock": 8,
		"category": "strings",
		"brand": "Kirschbaum",
		"description": "With Pro Line II Rough Kirschbaum adds some texture to the surface of one of their most popular co- polys. Like the standard Pro Line II, this string's low-powered response allows big hitters to take huge cuts at the ball without fear of overhitting. This not only enables the player to swing faster in the service of pace and spin, but it also makes it easier to close out points with ambitious shots. Although this is a firm string, our playtesters loved the feel and reported zero problems with discomfort. Big swinging intermediate and advanced players looking for control and durability should give this string a serious look."
	},
	{
		"title": "Kirschbaum Spiky Black Shark 16/1.30 String Reel",
		"price": 89,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1-1r2KaAZyymZRSWJPITcxgSw4d7tqHq9",
		"index": 36,
		"stock": 3,
		"category": "strings",
		"brand": "Kirschbaum",
		"description": "Armed with eight sharp edges, this shark has some serious bite (think easy spin) The crisp and very predictable response will give big hitters exceptional control on their biggest swings. Players who like hitting heavy topspin, penetrating slices and big kickers need look no further. Spiky Black Shark offers excellent ball pocketing with a comfortably firm feel. "
	},
	{
		"title": "Babolat Gold Championship Ball 24 Can Case",
		"price": 59.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=103yLP_kIl5KDNBMLXX4GppC0NVPFgijq",
		"index": 37,
		"stock": 6,
		"category": "balls",
		"brand": "Babolat",
		"description": "Babolat's Gold Championship ball combines excellent feel and durability. This is a great ball for players looking for consistent performance throughout their toughest matches."
	},
	{
		"title": "Wilson US Open XD Tennis Ball 3-Ball 24 Can Case",
		"price": 99.9,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1nTAIpUq-hmM4AMLcSB2OMDPf-0Q0GpWP",
		"index": 38,
		"stock": 4,
		"category": "balls",
		"brand": "Wilson",
		"description": "For the past 40+ years, every point at the US Open has been played with a Wilson US Open tennis ball. Crafted with a premium woven felt, the Wilson US Open Extra Duty ball is ideal for play on hard, abrasive courts thanks to its excellent durability."
	},
	{
		"title": "Wilson Triniti All Court Tennis Ball 24 Can Case",
		"price": 109.99,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1GO6U1BTeAyU9a95Jj8xDXUB0bVux8HQN",
		"index": 39,
		"stock": 5,
		"category": "balls",
		"brand": "Wilson",
		"description": "Wilson brings something new to the ball market with Triniti, the first performance tennis ball designed with fully sustainable packaging. While there will not be the familiar 'pop' sound as a traditional ball can, the unique octagonal container, called a sleeve, is 100% recyclable after use. The ball features an Engage Core which integrates plastomer material to maintain a fresher feel four times longer than a standard core. STR felt is 50% more flexible than standard felt for better feel and durability. A better ball for the planet."
	},
	{
		"title": "Dunlop Australian Open XD Tennis Ball 24 Can Case",
		"price": 89.9,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1gk8SsyPOpIt4c1u6c4o61MzgUuc4zeBy",
		"index": 40,
		"stock": 9,
		"category": "balls",
		"brand": "Dunlop",
		"description": "The first Slam of the year, the 2019 Australian Open, opens with Dunlop as its new ball sponsor! This new tennis ball features an HD Core, which is a remastered version of the classic Dunlop Forte Core that is designed to play even more consistently and with greater durability. Dunlop has also added HD Pro Cloth to this ball, a premium felt engineered for the highest level of play. Players of all levels looking for the highest quality ball will be satisfied with this new offering from Dunlop. "
	},
	{
		"title": "Penn Tour Extra Duty Tennis Balls 24 Can Case",
		"price": 79.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=16t0b_rGoVL3jGiSdmdaHSQB7NQ1-x6YV",
		"index": 41,
		"stock": 0,
		"category": "balls",
		"brand": "Penn",
		"description": "Penn Tour tennis balls are a premium tennis ball used in 4 of the 5 largest tournaments in North America. The Tour balls feature LongPlay felt for great durability and Smart Optik felt treatment for high visibility on court. Smart Optik felt is 19% more visible than a standard tennis ball. Approved for ITF and USTA tournaments. Perfect for hard court surfaces."
	},
	{
		"title": "Pro Penn Marathon Regular Duty Tennis Balls 24 Can Case",
		"price": 89.95,
		"thumbnail": "http://drive.google.com/uc?export=view&id=1AY3W89mnC2iAExS9AkpED12JUNkGHmGo",
		"index": 42,
		"stock": 5,
		"category": "balls",
		"brand": "Penn",
		"description": "Penn's longest lasting tennis ball, the Pro Penn Marathon is the #1 choice among USPTA Teaching Professionals. These feature Penn's Encore technology for more longevity in the core and LongPlay felt for better durability. Optik felt keeps visibility at a maximum. These particular Pro Penn Marathon balls are made of regular duty felt, ideal for soft courts such as: clay, grass, omni and carpet etc."
	}
]

PRODUCTS.forEach(function(product) {
    db.collection("products").add({
        index: product.index,
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        brand: product.brand,
        stock: product.stock,
        thumbnail: product.thumbnail
    }).then(function(docRef) {
        console.log("Document written with id: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});