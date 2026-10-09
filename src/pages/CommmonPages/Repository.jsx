import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// Shared data: used here (cards) and in ResearchDetail.jsx (full page).
// Optional: add `video: 'https://.../clip.mp4'` to any card to show a video in its slider.
export const CARDS = [
  {
    id: 'ice-cores',
    title: 'Ice Cores and Climate',
    tags: ['ice', 'climate'],
    text: "Air trapped for hundreds of thousands of years reveals how Earth's climate has changed.",
    image: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=900&q=80',
    alt: 'Frozen polar landscape',
    en: `An ice core is a long cylinder of ice drilled out of a glacier or an ice sheet, sometimes more than two kilometres deep. Each winter's snowfall is buried by the next, and the weight above slowly squeezes loose snow into solid ice. What remains is a stack of yearly layers, like the pages of a book that nobody has opened yet. Because the layers form in order and never mix, they carry a continuous record of everything that was in the air at the time they formed.

Inside those layers sit tiny bubbles of ancient air. Scientists cut a slice of the core and crush it inside a vacuum, releasing the trapped air so it can be measured for carbon dioxide, methane, nitrous oxide and other gases. The same layer also holds dust, volcanic ash, sea salt, pollen and traces of human pollution from recent centuries. Together these tell us not only what the atmosphere was made of, but how winds blew, how oceans behaved and how deserts expanded or shrank.

Dating an ice core is done in two ways at once. First, glaciologists count the annual layers, much like counting tree rings, using electrical conductivity and dust patterns to spot the seasonal change. Second, they look for ash from known volcanic eruptions, which act as fixed time markers around the world. When both methods agree, the core's timeline becomes reliable even for depths reaching back hundreds of thousands of years.

What makes ice cores so valuable is that they are a direct measurement, not a reconstruction. A thermometer reading from the year 1200 does not exist, but the air from the year 1200 does, trapped in a bubble under the Antarctic surface. By measuring the isotopes of oxygen and hydrogen in the ice itself, scientists can also estimate the temperature at the time the snow fell. Combining gas measurements with temperature estimates gives a picture of how carbon dioxide and climate have moved together across eight glacial cycles.

Antarctic and Greenland cores together give one of the longest direct records of Earth's atmosphere. The oldest continuous Antarctic core reaches back around 800,000 years, and a few projects are now drilling for ice more than a million years old. Throughout that entire period, carbon dioxide stayed between roughly 180 and 300 parts per million. Today it is above 420 parts per million, which is far outside the natural range of the last 800,000 years. That contrast is one of the strongest pieces of evidence that human activity is changing the climate.

Ice cores also reveal that climate does not always change slowly. Some cores show sharp shifts in temperature and dust within a few decades, suggesting that the climate system has tipping points where small pushes create large responses. Scientists study these ancient jumps carefully because they help us understand what might happen as the modern atmosphere warms. If the past can change quickly, the future might as well.

India participates in this research both in Antarctica, through its stations Maitri and Bharati, and in the Himalaya, where shallow cores from high glaciers are used to study regional climate over the last few centuries. These cores are smaller and shorter than polar ones, but they still hold a valuable record of monsoon strength, dust transport and pollution from the Indian subcontinent. Every metre of ice removed from a glacier is a page of climate history that will not be replaced in our lifetime.`,
    hi: `आइस कोर बर्फ़ के लंबे बेलनाकार नमूने होते हैं, जिन्हें ग्लेशियरों और बर्फ़ की चादरों में गहराई तक ड्रिल करके निकाला जाता है। कुछ कोर दो किलोमीटर से भी अधिक गहरे होते हैं और इनमें पृथ्वी के वायुमंडल का लाखों साल पुराना इतिहास सुरक्षित रहता है। हर साल जो बर्फ़ गिरती है, वह अगले साल की बर्फ़ के नीचे दब जाती है। ऊपर के वज़न से नीचे की बर्फ़ धीरे-धीरे सिकुड़ती है और ठोस बर्फ़ में बदल जाती है, लेकिन उसके बीच फँसी हवा के नन्हे बुलबुले वैसे ही बने रहते हैं। इस तरह आइस कोर वर्षों की परतों का ढेर बन जाता है — जैसे किसी पुस्तक के पन्ने जो सैकड़ों हजारों साल से बंद पड़े हों।

हर परत उस वर्ष का एक नमूना है। उसमें उस समय की हवा, धूल, ज्वालामुखी की राख, समुद्री नमक के कण और पराग के महीन कण भी फँसे होते हैं। वैज्ञानिक कोर के एक टुकड़े को काटकर निर्वात कक्ष में तोड़ते हैं, जिससे अंदर की प्राचीन हवा बाहर निकल आती है। उस हवा में कार्बन डाइऑक्साइड, मीथेन, नाइट्रस ऑक्साइड और अन्य गैसों की मात्रा नापी जाती है। इन आँकड़ों से पता चलता है कि उस समय पृथ्वी का तापमान कैसा था, वायुमंडल में ग्रीनहाउस गैसें कितनी थीं, और जलवायु किस तरह बदलती रही है।

आइस कोर की उम्र दो तरीक़ों से तय की जाती है। पहला — परतों की गिनती, जैसे पेड़ के छल्ले गिने जाते हैं। बर्फ़ की विद्युत चालकता और धूल के पैटर्न से सालाना परत का पता चलता है। दूसरा — ज्ञात ज्वालामुखी विस्फोटों की राख को खोजना, जो पूरी दुनिया में एक तय समय-चिह्न का काम करती है। जब दोनों तरीक़े मिलते हैं, तो कोर की समयरेखा भरोसेमंद हो जाती है, चाहे गहराई लाखों साल पुरानी क्यों न हो।

आइस कोर की सबसे बड़ी खूबी यह है कि यह सीधा माप है, कोई अनुमान नहीं। सन 1200 का थर्मामीटर रिकॉर्ड तो नहीं है, लेकिन सन 1200 की हवा आज भी अंटार्कटिका की सतह के नीचे बुलबुले में बंद है। बर्फ़ में ऑक्सीजन और हाइड्रोजन के समस्थानिक नापकर वैज्ञानिक उस समय का तापमान भी अनुमानित करते हैं। गैस माप और तापमान अनुमान मिलकर बताते हैं कि पिछले आठ हिमयुगों में कार्बन डाइऑक्साइड और जलवायु एक साथ कैसे बदले।

अंटार्कटिका और ग्रीनलैंड के कोर मिलकर पृथ्वी के वायुमंडल का सबसे लंबा सीधा रिकॉर्ड देते हैं। सबसे पुराना अंटार्कटिक कोर लगभग आठ लाख साल पीछे तक जाता है, और कुछ परियोजनाएँ अब दस लाख साल से पुरानी बर्फ़ की खोज कर रही हैं। इन आठ लाख सालों में कार्बन डाइऑक्साइड का स्तर लगभग 180 से 300 पीपीएम के बीच ही रहा। आज यह 420 पीपीएम से ऊपर है, जो प्राकृतिक दायरे से बहुत बाहर है। यह अंतर मानव गतिविधि के प्रभाव का सबसे मज़बूत प्रमाण है।

आइस कोर यह भी बताते हैं कि जलवायु हमेशा धीरे-धीरे नहीं बदलती। कुछ कोरों में कुछ ही दशकों के भीतर तापमान और धूल में बड़े अचानक बदलाव मिले हैं, जो बताते हैं कि जलवायु तंत्र में ऐसे मोड़ हैं जहाँ छोटा धक्का बड़ा असर देता है। वैज्ञानिक इन प्राचीन उछालों को ध्यान से पढ़ते हैं, क्योंकि वे बताते हैं कि आज का बदलाव भी तेज़ हो सकता है।

भारत इस शोध में अंटार्कटिका में मैत्री और भारती स्टेशनों से भाग लेता है, और हिमालय में भी ऊँचे ग्लेशियरों से छोटे कोर निकालकर पिछली कुछ सदियों की क्षेत्रीय जलवायु का अध्ययन करता है। ये कोर ध्रुवीय कोरों से छोटे होते हैं, लेकिन इनमें मानसून की ताक़त, धूल के परिवहन और उपमहाद्वीप के प्रदूषण का बहुमूल्य रिकॉर्ड मौजूद रहता है। ग्लेशियर से निकाली गई हर इंच बर्फ़ जलवायु इतिहास का एक पन्ना है जो हमारे जीवनकाल में दोबारा नहीं बनेगा।`,
    fact: 'Air bubbles in some Antarctic ice cores are over 800,000 years old.',
  },
  {
    id: 'southern-ocean-life',
    title: 'Life in the Southern Ocean',
    tags: ['wildlife', 'antarctic'],
    text: 'Discover how krill, penguins and marine ecosystems respond to a changing ocean.',
    image: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=900&q=80',
    alt: 'Polar wildlife and ocean',
    en: `The Southern Ocean rings Antarctica and is one of the most productive seas on Earth. Its food web begins with microscopic algae that grow under and inside the sea ice. These algae use sunlight and nutrients to bloom in enormous numbers as the ice melts each spring. Without them, almost nothing larger could survive here.

Feeding on those algae are Antarctic krill — shrimp-like crustaceans only a few centimetres long. Krill gather in swarms so dense that the water turns pink, and a single swarm can contain millions of animals. Across the whole Southern Ocean, their combined weight is estimated to be greater than that of any other wild animal species on the planet. That is why krill are called a keystone species: remove them and the entire structure collapses.

Almost everything larger depends on krill. Adélie and gentoo penguins feed them to their chicks. Crabeater seals have specialised teeth that act as a sieve, letting them filter krill from the water. Blue, humpback and fin whales migrate thousands of kilometres each summer to feed in these waters, and a single humpback can swallow more than a tonne of krill in a day. Even seabirds like petrels and albatross depend on krill indirectly, by feeding on the fish and squid that eat krill.

Sea ice is not just a food source; it is also a nursery. Krill eggs sink and develop under the ice, where they are protected from predators and currents. Young krill graze on algae that hang beneath the ice like a thick carpet. When sea ice shrinks, that carpet disappears, and the whole life cycle of krill slows down. Fewer krill means weaker penguin chicks, more time spent by whales searching for food, and less catch for the fishing fleets that target krill for aquaculture feed and oil.

Scientists monitor all this in several ways. Research ships collect water samples and count krill with fine nets. Satellites map the extent of sea ice and the colour of the ocean, which reveals where algae are blooming. Penguin colonies are watched from space by photographing their droppings, which stand out pink against the white ice. Long-term datasets from stations around Antarctica help reveal whether these patterns are shifting.

India's Antarctic programme studies the Southern Ocean's productivity, krill distribution and seabird populations. Indian scientists also collaborate with international programmes that share data across many nations. Since the Southern Ocean drives global ocean circulation, changes here do not stay here — they affect weather and sea level far away.

The message from the Southern Ocean is simple and clear: everything is connected. The smallest animal in the sea shapes the future of the largest. Protecting the sea ice is protecting the entire ecosystem, and protecting the ecosystem is protecting ourselves.`,
    hi: `दक्षिणी महासागर अंटार्कटिका महाद्वीप को चारों ओर से घेरता है और पृथ्वी के सबसे उत्पादक समुद्रों में गिना जाता है। इसकी खाद्य शृंखला की शुरुआत अत्यंत सूक्ष्म शैवालों से होती है, जो समुद्री बर्फ़ के नीचे और भीतर उगती हैं। ये शैवाल सूर्य के प्रकाश और समुद्री पोषक तत्वों की सहायता से बढ़ती हैं और समुद्री बर्फ़ के पिघलने के मौसम में अत्यधिक मात्रा में फैल जाती हैं। इन्हीं शैवालों पर अंटार्कटिक क्रिल पलते हैं, जो झींगे जैसे कुछ सेंटीमीटर लंबे क्रस्टेशियन हैं।

क्रिल दक्षिणी महासागर की खाद्य शृंखला का असली आधार हैं। ये इतने घने झुंडों में इकट्ठा होते हैं कि पानी गुलाबी दिखने लगता है और कभी-कभी एक झुंड में लाखों की संख्या में जीव होते हैं। पूरे दक्षिणी महासागर में इनका कुल वज़न किसी भी अन्य जंगली जीव की प्रजाति से अधिक माना जाता है। इसीलिए इन्हें "की-स्टोन प्रजाति" कहा जाता है — जिसके हटने से पूरी इमारत गिर सकती है।

इन क्रिलों पर पेंगुइन, सील, व्हेल और समुद्री पक्षी सभी निर्भर हैं। एडेली और जेंटू पेंगुइन अपने चूजों को खिलाने के लिए क्रिल का सहारा लेते हैं। क्रैबीटर सील की विशेष दाँतेदार संरचना क्रिल को छानने के लिए बनी होती है। ब्लू व्हेल, हम्पबैक और फिन व्हेल हर गर्मी में हज़ारों किलोमीटर की यात्रा करके दक्षिणी महासागर आती हैं, क्योंकि यहीं उन्हें भरपूर भोजन मिलता है। एक हम्पबैक व्हेल एक दिन में एक टन से अधिक क्रिल खा सकती है।

समुद्री बर्फ़ क्रिल के लिए केवल भोजन का स्रोत नहीं, बल्कि नर्सरी का काम भी करती है। क्रिल के अंडे बर्फ़ के नीचे पलते हैं और वहाँ शिकारियों तथा धाराओं से सुरक्षित रहते हैं। नन्हे क्रिल बर्फ़ के नीचे लगी शैवाल की मोटी परत पर चरते हैं। जब समुद्री बर्फ़ घटती है, तो यह परत गायब हो जाती है और क्रिल का पूरा जीवन-चक्र धीमा पड़ जाता है।

कम क्रिल का मतलब है — कमज़ोर पेंगुइन चूजे, व्हेल को भोजन ढूँढने में ज़्यादा समय, और उन मछली पकड़ने वाले जहाज़ों के लिए कम पकड़ जो क्रिल को एक्वाकल्चर फ़ीड और तेल के लिए इकट्ठा करते हैं। यह असर पूरी शृंखला में ऊपर तक दिखता है।

वैज्ञानिक इन बदलावों को कई तरीक़ों से नापते हैं। शोध जहाज़ पानी के नमूने लेते हैं और महीन जालों से क्रिल गिनते हैं। उपग्रह समुद्री बर्फ़ का दायरा और समुद्र का रंग मापते हैं, जिससे पता चलता है कि शैवाल कहाँ खिल रहे हैं। पेंगुइन कॉलोनियों को अंतरिक्ष से देखा जाता है, क्योंकि उनका गुलाबी मल सफ़ेद बर्फ़ पर साफ़ दिखता है। अंटार्कटिका के आसपास के स्टेशनों से मिलने वाले दीर्घकालिक आँकड़े बताते हैं कि ये पैटर्न बदल रहे हैं या नहीं।

भारत का अंटार्कटिक कार्यक्रम दक्षिणी महासागर की जैविक उत्पादकता, क्रिल वितरण और समुद्री पक्षियों पर शोध करता है। भारतीय वैज्ञानिक उन अंतरराष्ट्रीय कार्यक्रमों से भी जुड़े हैं जो कई देशों के आँकड़े साझा करते हैं। चूँकि दक्षिणी महासागर वैश्विक महासागरीय परिसंचरण को चलाता है, यहाँ के बदलाव यहीं नहीं रुकते — वे दूर के मौसम और समुद्र के स्तर को भी प्रभावित करते हैं।

दक्षिणी महासागर का संदेश सरल और स्पष्ट है — यहाँ सब कुछ एक-दूसरे से जुड़ा है। समुद्र का सबसे छोटा जीव सबसे बड़े जानवर का भविष्य तय करता है। समुद्री बर्फ़ की रक्षा पूरे पारिस्थितिकी तंत्र की रक्षा है, और पारिस्थितिकी तंत्र की रक्षा हमारी अपनी रक्षा है।`,
    fact: 'A single krill swarm can contain millions of animals.',
  },
  {
    id: 'himalayan-glaciers',
    title: 'Himalayan Glaciers',
    tags: ['himalaya', 'ice'],
    text: 'Explore how melting mountain glaciers affect rivers, ecosystems and communities.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    alt: 'Snow-covered Himalayan mountains',
    en: `Outside the polar regions, the Himalaya–Karakoram–Hindu Kush holds the largest store of ice on Earth. That is why the region is called the Third Pole. Thousands of glaciers sit above 4,000 metres and together they feed the Indus, Ganga, Brahmaputra and dozens of smaller river systems. These rivers supply drinking water, irrigation and hydropower to more than a billion people across India, Nepal, Pakistan, Bangladesh and China.

Himalayan glaciers do not release water evenly through the year. In winter they gain mass as snow piles up; in summer they lose it as meltwater flows down. The critical period is the pre-monsoon months, when rainfall is low and rivers would otherwise shrink. At exactly that time, glacier melt tops up the flow and keeps rivers alive. Farmers across northern India time their sowing to this rhythm, and hydropower stations plan their output around it.

Scientists measure glacier change using several tools at once. Satellite images map how the ice area shrinks or grows. Drones photograph the surface in fine detail, revealing crevasses and melt ponds. Stakes drilled into the ice record how much snow was added in winter and how much ice melted in summer. Snow pits dug by hand show the thickness of each yearly layer. Together these tell us whether a glacier is gaining or losing mass.

Over recent decades, many Himalayan glaciers have been thinning. But the picture is not uniform. Some glaciers in the Karakoram range have stayed stable or even advanced slightly, a pattern scientists call the Karakoram Anomaly. The reasons include local wind patterns, the direction of slopes, and how much snow falls in winter. Understanding these differences is essential, because water planning that ignores them can be badly wrong.

Glacier retreat creates other risks besides water shortage. When ice pulls back, it often leaves behind a lake held in place only by loose rock and dead ice. If that natural dam fails, the water can rush downstream in a sudden flood, sweeping away bridges, roads and villages. Such events are called Glacial Lake Outburst Floods and have been recorded in the Himalaya, the Alps and the Andes. Teams now map these lakes and install early-warning sensors in the most dangerous valleys.

Glaciers are also part of local culture and identity. In the Himalaya, rivers born of glacier melt are worshipped, and the annual rhythm of meltwater shapes festivals, farming and daily life. When glaciers change, that rhythm changes too. Protecting them is not only a scientific task but a shared responsibility of every community that lives downstream.

India's glacier research is carried out by institutions such as NCPOR, WIHG and IITs, using a mix of field camps and satellite data. The work is slow, cold and often dangerous, but every measurement helps build a clearer picture of what the coming decades will look like for the rivers that sustain a subcontinent.`,
    hi: `ध्रुवीय क्षेत्रों के बाहर हिमालय-काराकोरम-हिंदूकुश पर्वत श्रृंखला में पृथ्वी की सबसे बड़ी बर्फ़ का भंडार मौजूद है। इसीलिए इस क्षेत्र को "तीसरा ध्रुव" कहा जाता है। यहाँ 4,000 मीटर से ऊपर हज़ारों ग्लेशियर हैं, जो सिंधु, गंगा, ब्रह्मपुत्र और उनकी सहायक नदियों को पानी देते हैं। यही नदियाँ भारत, नेपाल, पाकिस्तान, बांग्लादेश और चीन के अरबों लोगों के लिए पीने का पानी, खेती और बिजली का स्रोत हैं।

हिमालयी ग्लेशियर सालभर पानी नहीं देते — वे मौसम के अनुसार व्यवहार करते हैं। सर्दियों में बर्फ़ जमा होती है और गर्मियों में पिघलती है। सबसे महत्वपूर्ण समय मानसून से पहले का होता है, जब बारिश कम होती है और नदियाँ सूखने लगती हैं। ठीक उसी समय ग्लेशियर का पिघला पानी नदियों को सहारा देता है। उत्तर भारत के किसान इसी लय के अनुसार बुवाई की योजना बनाते हैं, और पनबिजली स्टेशन अपना उत्पादन इसी पर टिकाते हैं।

वैज्ञानिक ग्लेशियरों के बदलाव को कई तरीक़ों से नापते हैं। उपग्रह चित्रों से बर्फ़ का क्षेत्र मापा जाता है, ड्रोन से सतह की बारीक तस्वीरें ली जाती हैं, और बर्फ़ में गड़े खूँटों से पता चलता है कि सालभर में कितनी बर्फ़ जमी और कितनी पिघली। हाथ से खोदे गए स्नो-पिट हर परत की मोटाई बताते हैं। ये सब मिलकर बताते हैं कि ग्लेशियर बढ़ रहा है या घट रहा है।

पिछले दशकों में हिमालय के कई ग्लेशियर लगातार पतले हो रहे हैं। लेकिन तस्वीर एक जैसी नहीं है — काराकोरम के कुछ ग्लेशियर स्थिर रहे हैं या थोड़े आगे बढ़े भी हैं, जिसे "काराकोरम एनोमली" कहा जाता है। इसके कारणों में स्थानीय हवाओं का पैटर्न, ढलान की दिशा और सर्दियों में गिरने वाली बर्फ़ की मात्रा शामिल हैं। इन अंतरों को समझना ज़रूरी है, क्योंकि इन्हें नज़रअंदाज़ करके बनाई गई जल योजना बहुत गलत साबित हो सकती है।

ग्लेशियर पिघलने से पानी की कमी के अलावा और भी खतरे पैदा होते हैं। जब बर्फ़ पीछे हटती है, तो कभी-कभी ढीले पत्थरों और मृत बर्फ़ से बनी प्राकृतिक दीवार के पीछे एक झील बन जाती है। अगर यह दीवार टूटे, तो पानी अचानक नीचे की ओर तेज़ बहाव के साथ आता है और पुल, सड़कें तथा गाँव बहा सकता है। इसे "ग्लेशियल लेक आउटबर्स्ट फ्लड" कहा जाता है और यह हिमालय, आल्प्स और एंडीज़ सब जगह दर्ज किया गया है। वैज्ञानिक अब इन झीलों का नक्शा बनाते हैं और सबसे खतरनाक घाटियों में चेतावनी सेंसर लगाते हैं।

ग्लेशियर केवल पानी के स्रोत नहीं, बल्कि संस्कृति और पहचान का हिस्सा भी हैं। हिमालय में ग्लेशियर से जन्मी नदियों की पूजा होती है, और पिघलने की सालाना लय त्योहारों, खेती और रोज़मर्रा के जीवन को आकार देती है। जब ग्लेशियर बदलते हैं, तो यह लय भी बदलती है। इनकी रक्षा केवल वैज्ञानिक काम नहीं, बल्कि हर उस समुदाय की साझा ज़िम्मेदारी है जो नीचे की ओर रहता है।

भारत में ग्लेशियर शोध एनसीपीओआर, डब्ल्यूआईएचजी और आईआईटी जैसी संस्थाएँ करती हैं, जो फ़ील्ड कैंप और उपग्रह डेटा दोनों का इस्तेमाल करती हैं। यह काम धीमा, ठंडा और अक्सर खतरनाक होता है, लेकिन हर माप यह स्पष्ट करती है कि आने वाले दशकों में उपमहाद्वीप की नदियों का भविष्य कैसा होगा।`,
    fact: 'Rivers fed by Himalayan ice and snow support well over a billion people.',
  },
  {
    id: 'antarctic-research',
    title: 'Antarctic Research',
    tags: ['antarctic', 'ice'],
    text: 'Explore scientific expeditions studying Antarctica, its ice sheets and environment.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80',
    alt: 'Ocean waves and polar waters',
    en: `Antarctica is the coldest, driest and windiest continent on Earth. Temperatures fall below minus fifty degrees Celsius across much of the interior, and the lowest ever recorded, near minus eighty-nine, was measured at Vostok Station. Yet this frozen land holds about ninety percent of the world's fresh water as ice, and if all of it melted, global sea level would rise by roughly fifty-eight metres.

The continent is not owned by any country. Under the Antarctic Treaty, signed in 1959, the whole continent is reserved for peaceful scientific research. Dozens of nations operate research stations there, sharing data and cooperating across languages and borders. Antarctica is, in a sense, the world's largest laboratory, and everything measured there is for the benefit of everyone.

India began its Antarctic programme in 1981 and has maintained a continuous presence ever since. The first Indian station, Dakshin Gangotri, was set up in 1983; today India operates two active stations — Maitri, in the Schirmacher Oasis, and Bharati, on the coast near the Larsemann Hills. From these bases, Indian scientists study the ice sheet, the atmosphere, sea ice, geology and marine life.

The air above Antarctica is unusually clean because there are no factories, cities or vehicles nearby. That makes it an ideal place to measure background levels of carbon dioxide and other greenhouse gases. The famous Keeling Curve, which first showed that atmospheric carbon dioxide is rising year after year, was built from measurements taken at the South Pole and in Hawaii. Without that record, the modern climate debate would be far less grounded in evidence.

Working in Antarctica is physically and mentally demanding. Ice drilling requires special equipment that cuts without melting the sample. Instruments must be built to survive extreme cold, and batteries drain quickly. Storms can arrive with little warning, cutting visibility to a few metres. Every trip outside is planned in advance, and every team member carries emergency gear in case something goes wrong.

Antarctic ice also records the history of the planet. Ice cores drilled here contain air from hundreds of thousands of years ago, and the layers beneath the ice preserve a record of past volcanic eruptions, dust storms and even the rhythm of ice ages. Studies of the ice sheet's flow reveal how it might respond to warming, and how quickly sea level could rise in the future.

Antarctic research matters because Antarctica is not just a faraway place. What happens there shapes the climate of every continent. By studying its ice, ocean and atmosphere, scientists are reading the future of the entire planet — one careful measurement at a time.`,
    hi: `अंटार्कटिका पृथ्वी का सबसे ठंडा, सबसे सूखा और सबसे तेज़ हवाओं वाला महाद्वीप है। यहाँ औसत तापमान -50 डिग्री सेल्सियस तक गिर जाता है, और सबसे कम तापमान लगभग -89 डिग्री वोस्तोक स्टेशन पर दर्ज किया गया है। फिर भी यह जमी हुई भूमि दुनिया के लगभग 90 प्रतिशत मीठे पानी को बर्फ़ के रूप में समेटे हुए है, और अगर यह सब पिघल जाए तो समुद्र का स्तर लगभग 58 मीटर बढ़ सकता है।

यह महाद्वीप किसी देश का नहीं है। 1959 में हस्ताक्षरित अंटार्कटिक संधि के तहत पूरा महाद्वीप शांतिपूर्ण वैज्ञानिक शोध के लिए आरक्षित रखा गया है। दर्जनों देश यहाँ शोध स्टेशन चलाते हैं, आँकड़े साझा करते हैं और भाषाओं व सीमाओं के पार मिलकर काम करते हैं। अंटार्कटिका एक तरह से दुनिया की सबसे बड़ी प्रयोगशाला है, और यहाँ का हर माप सबके लाभ के लिए है।

भारत ने 1981 में अपना अंटार्कटिक कार्यक्रम शुरू किया और तब से लगातार वहाँ मौजूद है। पहला भारतीय स्टेशन, दक्षिण गंगोत्री, 1983 में स्थापित हुआ; आज भारत दो सक्रिय स्टेशन चलाता है — शिरमाकर ओएसिस में मैत्री, और लार्सेमन हिल्स के पास तट पर भारती। इन आधारों से भारतीय वैज्ञानिक बर्फ़ की चादर, वायुमंडल, समुद्री बर्फ़, भूविज्ञान और समुद्री जीवन का अध्ययन करते हैं।

अंटार्कटिका की हवा असाधारण रूप से साफ़ है, क्योंकि आसपास कोई कारख़ाना, शहर या वाहन नहीं है। यही कारण है कि यह कार्बन डाइऑक्साइड और अन्य ग्रीनहाउस गैसों के आधारभूत स्तर मापने के लिए आदर्श जगह बन जाती है। प्रसिद्ध "कीलिंग कर्व", जिसने सबसे पहले दिखाया कि वायुमंडलीय कार्बन डाइऑक्साइड हर साल बढ़ रही है, दक्षिणी ध्रुव और हवाई में लिए गए मापों से बना था। उस रिकॉर्ड के बिना आधुनिक जलवायु बहस में इतने ठोस प्रमाण न होते।

अंटार्कटिका में काम करना शारीरिक और मानसिक रूप से कठिन है। बर्फ़ ड्रिल करने के लिए विशेष उपकरण चाहिए जो नमूने को पिघलाए बिना काटें। उपकरणों को अत्यधिक ठंड में काम करने लायक बनाना पड़ता है, और बैटरी जल्दी खत्म होती है। तूफ़ान बिना चेतावनी आ सकते हैं और दृश्यता कुछ मीटर तक घटा सकते हैं। बाहर की हर यात्रा पहले से योजना बनाकर की जाती है, और हर सदस्य आपातकालीन सामान साथ रखता है।

अंटार्कटिका की बर्फ़ पृथ्वी का इतिहास भी दर्ज करती है। यहाँ निकाले गए आइस कोर में लाखों साल पुरानी हवा बंद है, और बर्फ़ के नीचे की परतें पिछले ज्वालामुखी विस्फोटों, धूल भरी आँधियों और हिमयुगों की लय सुरक्षित रखती हैं। बर्फ़ की चादर के बहाव का अध्ययन बताता है कि गर्माहट बढ़ने पर यह कैसे प्रतिक्रिया दे सकती है और समुद्र का स्तर कितनी तेज़ी से बढ़ सकता है।

अंटार्कटिका का शोध इसलिए महत्वपूर्ण है क्योंकि यह केवल कोई दूर की जगह नहीं है। वहाँ जो होता है, वह हर महाद्वीप की जलवायु को आकार देता है। इसकी बर्फ़, महासागर और वायुमंडल का अध्ययन करके वैज्ञानिक पूरी पृथ्वी का भविष्य पढ़ रहे हैं — एक-एक सावधान माप के साथ।`,
    fact: 'If all Antarctic ice melted, global sea level would rise by roughly 58 metres.',
  },
  {
    id: 'arctic-ecosystems',
    title: 'Arctic Ecosystems',
    tags: ['arctic', 'wildlife'],
    text: 'Understand the changing Arctic environment and the species that depend on it.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80',
    alt: 'Northern polar sky',
    en: `The Arctic is not a continent but an ocean surrounded by land. It touches the northern coasts of North America, Europe and Asia, and its heart is the Arctic Ocean, covered with sea ice for much of the year. Unlike Antarctica, there is no land beneath the ice at the North Pole, just frozen ocean floating on top of cold, dark water.

In recent decades the Arctic has been warming faster than anywhere else on Earth, in some seasons close to four times the global average. Sea ice is shrinking in extent and thinning in thickness, and the summer minimum is now far smaller than it was in the 1980s. The change affects not only the region itself but weather patterns thousands of kilometres away.

Life in the Arctic is built around ice. Polar bears hunt seals from the ice edge, waiting for the animals to surface at breathing holes. Their success depends on how far the ice extends and how thick it is. Ringed and bearded seals give birth on the ice in spring and use it as a platform to rest and to escape from predators in the water. Walruses haul themselves onto ice floes to rest between dives for clams on the ocean floor.

Seabirds nest in enormous colonies on Arctic cliffs. Guillemots, kittiwakes and little auks arrive in the brief summer to raise their chicks on the rich food supply that blooms when the sun never sets. On land, reindeer and musk oxen graze on tundra plants, and migratory birds arrive from as far away as Africa and India to breed. Every one of these species depends on the seasonal rhythm of ice, sun and food.

At sea, the food web begins with algae that grow under the ice and bloom when sunlight returns. These feed tiny crustaceans, which feed Arctic cod and capelin. Cod and capelin feed seals, seabirds and whales. Beluga, narwhal and bowhead whales follow the ice edge through the year, following the fish they depend on. Few ecosystems are so tightly tied to a single physical factor as the Arctic.

The Arctic is also home to millions of people — Inuit, Sámi, Nenets and other indigenous communities whose languages, food and ways of life are shaped by the ice. When sea ice retreats or changes its season, hunting routes shift, travel becomes dangerous and traditional knowledge is strained. Climate change in the Arctic is not just an environmental problem; it is a social and cultural one.

India's Himadri station at Ny-Ålesund in Svalbard has been operating since 2008 and hosts Indian scientists year-round. Research there covers the atmosphere, aerosols, snow, sea ice, marine ecology and the aurora. Data from Himadri feeds into international Arctic programmes that combine observations from many countries to build a global picture.

The Arctic is a warning system for the planet. What happens there tells us what may happen elsewhere, and how quickly. Understanding its ecosystems is not only about protecting the animals that live there, but about understanding the climate that shapes all our lives.`,
    hi: `आर्कटिक कोई महाद्वीप नहीं, बल्कि एक महासागर है जो भूमि से घिरा हुआ है। यह उत्तरी अमेरिका, यूरोप और एशिया के उत्तरी तटों को छूता है, और इसका दिल आर्कटिक महासागर है, जो साल के ज़्यादातर हिस्से में समुद्री बर्फ़ से ढका रहता है। अंटार्कटिका के विपरीत, उत्तरी ध्रुव के नीचे कोई ज़मीन नहीं है — बस ठंडे, गहरे पानी पर तैरती जमी हुई बर्फ़ है।

पिछले दशकों में आर्कटिक पृथ्वी पर किसी भी अन्य जगह से तेज़ी से गर्म हो रहा है — कुछ मौसमों में वैश्विक औसत से लगभग चार गुना। समुद्री बर्फ़ का दायरा घट रहा है और मोटाई पतली हो रही है, और गर्मियों की न्यूनतम बर्फ़ अब 1980 के दशक से बहुत कम है। यह बदलाव केवल इस क्षेत्र को ही नहीं, बल्कि हज़ारों किलोमीटर दूर के मौसम पैटर्न को भी प्रभावित करता है।

आर्कटिक का जीवन बर्फ़ के इर्द-गिर्द बना है। ध्रुवीय भालू बर्फ़ के किनारे से सील का शिकार करते हैं, यह इंतज़ार करते हुए कि सील साँस लेने के छेद पर ऊपर आए। उनकी सफलता इस पर निर्भर करती है कि बर्फ़ कितनी दूर तक फैली है और कितनी मोटी है। रिंग्ड और बियर्डेड सील वसंत में बर्फ़ पर बच्चों को जन्म देती हैं और उसी बर्फ़ को आराम तथा शिकारियों से बचने के लिए मंच की तरह इस्तेमाल करती हैं। वॉलरस समुद्र तल से क्लैम इकट्ठा करने के बीच आराम करने के लिए बर्फ़ के टुकड़ों पर चढ़ते हैं।

समुद्री पक्षी आर्कटिक की चट्टानों पर विशाल कॉलोनियों में घोंसले बनाते हैं। गिलमोट, किट्टीवेक और लिटिल ऑक छोटी गर्मी में पहुँचते हैं और अपने चूजों को उस भरपूर भोजन पर पालते हैं जो तब खिलता है जब सूरज कभी नहीं डूबता। ज़मीन पर रेनडियर और मस्क ऑक्स टुंड्रा के पौधे चरते हैं, और अफ्रीका तथा भारत तक से प्रवासी पक्षी यहाँ प्रजनन के लिए आते हैं। इन सभी प्रजातियों का जीवन बर्फ़, सूरज और भोजन की मौसमी लय पर टिका है।

समुद्र में खाद्य शृंखला की शुरुआत बर्फ़ के नीचे उगने वाली शैवालों से होती है, जो धूप लौटने पर खिलती हैं। ये नन्हे क्रस्टेशियन को खिलाती हैं, जो आर्कटिक कॉड और कैपलिन को। कॉड और कैपलिन सील, समुद्री पक्षियों और व्हेल को खिलाते हैं। बेलुगा, नारव्हाल और बोहेड व्हेल सालभर बर्फ़ के किनारे का पीछा करती हैं, उन मछलियों का पीछा करते हुए जिन पर वे निर्भर हैं। कम ही पारिस्थितिक तंत्र किसी एक भौतिक कारक से इतने गहराई से जुड़े होते हैं।

आर्कटिक लाखों लोगों का घर भी है — इनुइट, सामी, नेनेट्स और अन्य मूल निवासी समुदाय, जिनकी भाषाएँ, भोजन और जीवनशैली बर्फ़ से आकार लेती है। जब समुद्री बर्फ़ पीछे हटती है या उसका मौसम बदलता है, तो शिकार के रास्ते बदल जाते हैं, यात्रा खतरनाक हो जाती है और पारंपरिक ज्ञान पर दबाव बढ़ता है। आर्कटिक में जलवायु परिवर्तन केवल पर्यावरणीय समस्या नहीं, सामाजिक और सांस्कृतिक समस्या भी है।

भारत का हिमाद्रि स्टेशन स्वालबार्ड के नाई-एलेसुंड में 2008 से चल रहा है और वहाँ भारतीय वैज्ञानिक सालभर रहते हैं। वहाँ का शोध वायुमंडल, एरोसोल, बर्फ़, समुद्री बर्फ़, समुद्री पारिस्थितिकी और ध्रुवीय ज्योति को कवर करता है। हिमाद्रि के आँकड़े अंतरराष्ट्रीय आर्कटिक कार्यक्रमों में जाते हैं, जो कई देशों के अवलोकनों को मिलाकर वैश्विक तस्वीर बनाते हैं।

आर्कटिक पूरे ग्रह के लिए एक चेतावनी प्रणाली है। वहाँ जो होता है, वह बताता है कि और कहाँ क्या हो सकता है और कितनी तेज़ी से। इसके पारिस्थितिक तंत्र को समझना केवल वहाँ रहने वाले जीवों की रक्षा नहीं, बल्कि उस जलवायु को समझना है जो हम सबका जीवन आकार देती है।`,
    fact: 'In the polar summer, the Arctic sun can stay above the horizon for months.',
  },
  {
    id: 'polar-climate-change',
    title: 'Polar Climate Change',
    tags: ['climate', 'ice'],
    text: 'Discover how polar observations help scientists understand global climate patterns.',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80',
    alt: 'Snow and ice in a cold environment',
    en: `Polar regions act like Earth's thermostat. Bright snow and ice reflect most of the sunlight that hits them back into space, while dark ocean water absorbs that energy and warms up. This difference is called the albedo effect, and it is the main reason the poles matter far beyond their size. A change at the poles can shift the climate of the entire planet.

As ice retreats, more dark water is exposed, more heat is absorbed, and more ice melts. This is a positive feedback loop, meaning that warming accelerates its own cause. Scientists have observed this effect most clearly in the Arctic, where summer sea ice has declined by roughly forty percent since satellite records began in 1979. The Arctic is now warming nearly four times faster than the global average.

Polar oceans also drive global circulation. Cold, salty water near the poles becomes dense and sinks to the deep ocean, while warmer water flows in to replace it. This slow conveyor belt, sometimes called the thermohaline circulation, moves heat from the tropics to the poles and carries nutrients from the deep ocean back to the surface. If the poles change, this circulation can weaken, which affects weather patterns across every continent.

Scientists use several tools to watch the poles. Satellites track the extent, thickness and temperature of ice every day. Ice cores drilled from glaciers and ice sheets reveal the composition of ancient air and the climate of past ages. Drifting buoys and research ships measure the temperature and salinity of the ocean. Together these give a detailed, continuous picture that no single measurement could provide.

Polar records also test climate models. A climate model is a computer program that describes how the atmosphere, ocean, ice and land interact through mathematical equations. Models are tested by asking them to reproduce the past: if they can correctly simulate the last eight hundred thousand years of ice ages, they are more likely to be trusted for future projections. Ice cores and satellite records are the backbone of that testing.

Polar observations matter far beyond science. Governments use them to plan for sea level rise and changing rainfall. Farmers use them to decide which crops to grow. Insurance companies use them to assess risk in coastal cities. International bodies use them to set climate policy. A single measurement taken on a polar ice sheet can influence decisions made in a village thousands of kilometres away.

India contributes to this global effort through its Antarctic and Arctic programmes, its Earth-observation satellites, and its growing climate research community. Understanding the poles is not just about understanding faraway ice; it is about understanding the climate of the whole planet, and preparing for what comes next.`,
    hi: `ध्रुवीय क्षेत्र पृथ्वी के थर्मोस्टैट की तरह काम करते हैं। चमकदार बर्फ़ और हिम सूर्य की ज़्यादातर किरणों को वापस अंतरिक्ष में परावर्तित कर देते हैं, जबकि गहरा समुद्री पानी उस ऊर्जा को सोखकर गर्म हो जाता है। इसी अंतर को "एल्बेडो प्रभाव" कहते हैं और यही मुख्य कारण है कि ध्रुव अपने आकार से कहीं अधिक महत्वपूर्ण हैं। ध्रुवों पर एक बदलाव पूरे ग्रह की जलवायु को हिला सकता है।

जब बर्फ़ पीछे हटती है, तो ज़्यादा गहरा पानी खुल जाता है, ज़्यादा गर्मी सोखी जाती है, और और बर्फ़ पिघलती है। यह एक "पॉज़िटिव फ़ीडबैक लूप" है — यानी गर्माहट अपने ही कारण को तेज़ कर देती है। वैज्ञानिकों ने यह असर सबसे साफ़ आर्कटिक में देखा है, जहाँ 1979 में उपग्रह रिकॉर्ड शुरू होने के बाद से गर्मियों की समुद्री बर्फ़ लगभग चालीस प्रतिशत घट चुकी है। आर्कटिक अब वैश्विक औसत से लगभग चार गुना तेज़ी से गर्म हो रहा है।

ध्रुवीय महासागर वैश्विक परिसंचरण को भी चलाते हैं। ध्रुवों के पास ठंडा और नमकीन पानी भारी होकर गहरे महासागर में डूब जाता है, और उसकी जगह गर्म पानी आता है। यह धीमी "कन्वेयर बेल्ट", जिसे थर्मोहेलाइन परिसंचरण कहते हैं, गर्मी को भूमध्य रेखा से ध्रुवों तक और पोषक तत्वों को गहराई से सतह तक पहुँचाता है। अगर ध्रुव बदलें, तो यह परिसंचरण कमज़ोर हो सकता है, जिससे हर महाद्वीप के मौसम पैटर्न प्रभावित होंगे।

वैज्ञानिक ध्रुवों की निगरानी के लिए कई साधन इस्तेमाल करते हैं। उपग्रह हर दिन बर्फ़ का दायरा, मोटाई और तापमान दर्ज करते हैं। ग्लेशियरों और बर्फ़ की चादरों से निकाले गए आइस कोर प्राचीन हवा की संरचना और पिछले युगों की जलवायु बताते हैं। बहते बॉय और शोध जहाज़ समुद्र के तापमान और लवणता को मापते हैं। ये सब मिलकर एक विस्तृत, लगातार तस्वीर बनाते हैं जो कोई अकेला माप नहीं दे सकता।

ध्रुवीय रिकॉर्ड जलवायु मॉडलों की जाँच का भी काम करते हैं। जलवायु मॉडल ऐसे कंप्यूटर प्रोग्राम होते हैं जो वायुमंडल, महासागर, बर्फ़ और ज़मीन की परस्पर क्रियाओं को गणितीय समीकरणों से दर्शाते हैं। मॉडल की जाँच इस तरह होती है कि उसे अतीत दोहराने के लिए कहा जाए — अगर वह पिछले आठ लाख साल के हिमयुगों को सही-सही दिखा सके, तो भविष्य के अनुमानों पर भरोसा ज़्यादा होता है। आइस कोर और उपग्रह रिकॉर्ड इस जाँच की रीढ़ हैं।

ध्रुवीय अवलोकन विज्ञान से बहुत आगे तक मायने रखते हैं। सरकारें इनका उपयोग समुद्र के स्तर और बदलती बारिश की योजना के लिए करती हैं। किसान तय करते हैं कि कौन सी फसल बोनी है। बीमा कंपनियाँ तटीय शहरों में जोखिम का आकलन करती हैं। अंतरराष्ट्रीय संस्थाएँ जलवायु नीति तय करती हैं। ध्रुवीय बर्फ़ की चादर पर लिया गया एक माप हज़ारों किलोमीटर दूर किसी गाँव के फैसलों को प्रभावित कर सकता है।

भारत इस वैश्विक प्रयास में अपने अंटार्कटिक और आर्कटिक कार्यक्रमों, पृथ्वी-अवलोकन उपग्रहों और बढ़ते जलवायु शोध समुदाय के ज़रिए योगदान देता है। ध्रुवों को समझना केवल दूर की बर्फ़ को समझना नहीं है — यह पूरी पृथ्वी की जलवायु को समझना और आने वाले समय की तैयारी करना है।`,
    fact: 'Bright ice reflects most sunlight, while dark ocean absorbs it, which speeds up warming.',
  },
  {
    id: 'glacier-retreat',
    title: 'Glacier Retreat',
    tags: ['himalaya', 'climate'],
    text: 'Learn how scientists track glacier loss and its impact on sea levels and freshwater supplies.',
    image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=80',
    alt: 'Mountain glacier and surrounding peaks',
    en: `Glaciers are among the most sensitive indicators of climate change. They are slow-moving rivers of ice that build over centuries and can shrink within decades. Because they respond to both temperature and snowfall, they record the climate in a way that no thermometer can. When they change, they tell us something important about the world around them.

Measuring a glacier is not a single task but several. Satellite images map how the ice area changes from year to year, and modern satellites can even detect changes in surface height of a few metres. Drones photograph the glacier surface in fine detail, revealing crevasses, melt ponds and the paths of streams that form on the ice. Stakes drilled into the ice, measured year after year, record how much snow accumulates in winter and how much ice melts in summer — a number called the mass balance.

On the ground, glaciologists also dig snow pits and drill shallow cores to study the layers inside the glacier. They install sensors in streams that flow out from beneath the ice, measuring temperature, flow rate and sediment load. They use radar to see what lies under the ice, including the shape of the bedrock and the presence of water. Each method answers a slightly different question, and together they build a full picture.

At first, a retreating glacier adds extra meltwater to rivers. This can last for decades and is sometimes called the "meltwater bonus". But as the ice store shrinks, the bonus fades and the flow decreases — often in exactly the season when downstream farms, towns and power plants need it most. For regions like the Indus and Ganga basins, where hundreds of millions depend on glacier-fed rivers, this timing matters enormously.

Retreat also creates new hazards. When ice pulls back, it often leaves a lake behind, held in place only by loose rock and dead ice. If that dam fails, the water can rush downstream in a sudden flood. These glacial lake outburst floods have destroyed bridges, roads and villages in the Himalaya, the Alps and the Andes. Scientists now map such lakes and install sensors to give early warning to communities downstream.

Glaciers are not only physical features; they are part of culture. In the Himalaya, rivers born of glacier melt are worshipped, and the rhythm of the meltwater shapes festivals, farming and daily life. When glaciers change, that rhythm changes too. Protecting them is a scientific task and a shared responsibility of everyone who lives downstream.

India's glacier research combines field camps at high altitude with satellite data and computer modelling. Teams from NCPOR, WIHG, IITs and other institutions spend weeks in the mountains each year, measuring ice, snow and water. Their work is slow and difficult, but it is the foundation on which future water planning for a subcontinent will rest.`,
    hi: `ग्लेशियर जलवायु परिवर्तन के सबसे संवेदनशील संकेतकों में से हैं। ये धीरे-धीरे बहने वाली बर्फ़ की नदियाँ हैं, जो सदियों में बनती हैं और दशकों में घट सकती हैं। चूँकि ये तापमान और बर्फ़बारी दोनों पर प्रतिक्रिया देते हैं, ये जलवायु को ऐसे दर्ज करते हैं जैसे कोई थर्मामीटर नहीं कर सकता। जब ये बदलते हैं, तो वे हमें हमारे आसपास की दुनिया के बारे में कुछ महत्वपूर्ण बताते हैं।

ग्लेशियर को नापना एक काम नहीं, कई काम हैं। उपग्रह चित्र बताते हैं कि बर्फ़ का क्षेत्र साल-दर-साल कैसे बदलता है, और आधुनिक उपग्रह कुछ मीटर की सतह ऊँचाई में भी बदलाव पकड़ सकते हैं। ड्रोन ग्लेशियर की सतह की बारीक तस्वीरें लेते हैं, जिनसे दरारें, पिघलने के तालाब और बर्फ़ पर बनने वाली धाराओं के रास्ते दिखते हैं। बर्फ़ में गड़े खूँटे, जो हर साल नापे जाते हैं, बताते हैं कि सर्दियों में कितनी बर्फ़ जमा हुई और गर्मियों में कितनी पिघली — इसे "मास बैलेंस" कहते हैं।

ज़मीन पर वैज्ञानिक स्नो-पिट खोदकर और छोटे कोर ड्रिल करके ग्लेशियर के भीतर की परतों का अध्ययन करते हैं। वे बर्फ़ के नीचे से बहने वाली धाराओं में सेंसर लगाते हैं, जो तापमान, प्रवाह दर और तलछट की मात्रा मापते हैं। रडार की मदद से वे देखते हैं कि बर्फ़ के नीचे क्या है — तल की चट्टानों का आकार और पानी की मौजूदगी। हर तरीक़ा थोड़ा अलग सवाल का जवाब देता है और सब मिलकर पूरी तस्वीर बनाते हैं।

शुरू में पीछे हटता ग्लेशियर नदियों में अतिरिक्त पानी डालता है। यह कुछ दशकों तक चल सकता है और इसे कभी-कभी "मेल्टवाटर बोनस" कहा जाता है। लेकिन जैसे-जैसे बर्फ़ का भंडार घटता है, यह बोनस घट जाता है और प्रवाह कम हो जाता है — अक्सर ठीक उसी मौसम में जब नीचे के खेतों, शहरों और बिजलीघरों को सबसे ज़्यादा पानी चाहिए होता है। सिंधु और गंगा जैसे बेसिनों के लिए, जहाँ करोड़ों लोग ग्लेशियर से पोषित नदियों पर निर्भर हैं, यह समय बहुत मायने रखता है।

ग्लेशियर पीछे हटने से नए खतरे भी पैदा होते हैं। जब बर्फ़ पीछे हटती है, तो अक्सर पीछे एक झील रह जाती है, जिसे केवल ढीले पत्थर और मृत बर्फ़ रोके रहते हैं। अगर वह दीवार टूटे, तो पानी अचानक नीचे की ओर तेज़ बहाव के साथ आता है। इन "ग्लेशियल लेक आउटबर्स्ट फ्लड" ने हिमालय, आल्प्स और एंडीज़ में पुल, सड़कें और गाँव नष्ट किए हैं। वैज्ञानिक अब ऐसी झीलों का नक्शा बनाते हैं और नीचे के समुदायों को चेतावनी देने के लिए सेंसर लगाते हैं।

ग्लेशियर केवल भौतिक संरचनाएँ नहीं, संस्कृति का हिस्सा भी हैं। हिमालय में ग्लेशियर से जन्मी नदियों की पूजा होती है, और पिघलने की लय त्योहारों, खेती और रोज़मर्रा के जीवन को आकार देती है। जब ग्लेशियर बदलते हैं, तो यह लय भी बदलती है। इनकी रक्षा एक वैज्ञानिक काम भी है और हर उस व्यक्ति की साझा ज़िम्मेदारी भी जो नीचे की ओर रहता है।

भारत में ग्लेशियर शोध ऊँचाई वाले फ़ील्ड कैंपों को उपग्रह डेटा और कंप्यूटर मॉडलिंग के साथ जोड़ता है। एनसीपीओआर, डब्ल्यूआईएचजी, आईआईटी और अन्य संस्थाओं की टीमें हर साल हफ़्तों पहाड़ों में बिताती हैं, बर्फ़, हिम और पानी नापती हैं। यह काम धीमा और कठिन है, लेकिन यही उस नींव पर खड़ा है जिस पर उपमहाद्वीप की भविष्य की जल योजना टिकेगी।`,
    fact: 'Glacial lakes can burst suddenly, causing floods far downstream.',
  },
  {
    id: 'sea-ice',
    title: 'Sea Ice Observations',
    tags: ['arctic', 'climate'],
    text: 'Explore measurements that reveal how seasonal sea ice is changing across the polar regions.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80',
    alt: 'Ice-blue ocean water',
    en: `Sea ice is frozen ocean water, not land ice. It forms each winter, spreads across millions of square kilometres, and then melts back each summer. Unlike a glacier, it is always moving, pushed around by winds and currents, cracking and reforming as it drifts. Some of it survives more than one summer and becomes thicker and harder, while most melts within a single year.

Satellites have recorded the extent of sea ice every single day since 1979. This gives one of the longest, most consistent climate records we have. In the Arctic, the summer minimum has declined by roughly forty percent over those four decades, and the ice that remains is thinner and younger than it used to be. In the Antarctic, sea ice shows much larger year-to-year variation, and scientists are still working to understand its long-term trend.

Sea ice is measured in several ways. Passive microwave sensors on satellites detect the difference between the microwave radiation emitted by ice and by open water. Radar and laser altimeters measure the height of ice above the ocean surface, which reveals its thickness. Ships and submarines travelling beneath the ice take direct measurements, and drifting buoys report temperature and position continuously. Together these give a picture no single instrument could provide.

Less ice means more dark ocean is exposed, and dark ocean absorbs more of the sun's energy than bright ice does. This extra heat is stored in the water and released later, influencing weather patterns far from the poles. The effect works like a feedback loop: less ice means more warming, and more warming means even less ice. This is one reason polar regions are warming faster than the rest of the planet.

Sea ice also matters for the animals that depend on it. Polar bears hunt from the ice edge, seals use it as a nursery, walruses rest on it between dives, and Arctic foxes and birds rely on the food web that begins beneath it. When the ice retreats earlier in spring or arrives later in autumn, all of these animals are affected. Some are forced onto land, where food is scarcer and competition is higher.

Sea ice has economic importance too. As the Arctic warms, new shipping routes are opening, such as the Northern Sea Route along Russia's coast. These routes cut travel time and cost between Europe and Asia, but they also bring environmental risks. An oil spill in icy waters is far harder to clean than in warmer seas, and the noise of ships can disturb marine mammals that rely on sound to hunt and communicate.

India contributes to sea ice research through satellite data, international partnerships and observations from its Arctic and Antarctic stations. Understanding sea ice is not just about understanding the poles. It is about understanding the climate that shapes every coastline, every monsoon and every growing season on Earth.`,
    hi: `समुद्री बर्फ़ जमा हुआ समुद्री पानी है, भूमि की बर्फ़ नहीं। यह हर सर्दियों में बनती है, लाखों वर्ग किलोमीटर में फैलती है, और हर गर्मियों में पिघल जाती है। ग्लेशियर की तरह यह स्थिर नहीं रहती — हवाएँ और धाराएँ इसे बहाती रहती हैं, तोड़ती और फिर जोड़ती हैं। इसका कुछ हिस्सा एक से अधिक गर्मियाँ झेल जाता है और मोटा तथा सख़्त हो जाता है, जबकि ज़्यादातर एक ही साल में पिघल जाता है।

उपग्रहों ने 1979 से लगातार हर दिन समुद्री बर्फ़ का दायरा दर्ज किया है। यह हमारे पास उपलब्ध सबसे लंबे और सबसे सुसंगत जलवायु रिकॉर्ड में से एक है। आर्कटिक में इन चार दशकों में गर्मियों की न्यूनतम बर्फ़ लगभग चालीस प्रतिशत घट चुकी है, और जो बची है वह पहले से पतली और कम उम्र की है। अंटार्कटिका में समुद्री बर्फ़ साल-दर-साल ज़्यादा उतार-चढ़ाव दिखाती है, और वैज्ञानिक अभी भी उसके दीर्घकालिक रुझान को समझने पर काम कर रहे हैं।

समुद्री बर्फ़ को कई तरीक़ों से नापा जाता है। उपग्रहों पर लगे पैसिव माइक्रोवेव सेंसर बर्फ़ और खुले पानी से निकलने वाले माइक्रोवेव विकिरण के अंतर को पकड़ते हैं। रडार और लेज़र अल्टीमीटर समुद्र की सतह से बर्फ़ की ऊँचाई मापते हैं, जिससे उसकी मोटाई पता चलती है। बर्फ़ के नीचे चलने वाले जहाज़ और पनडुब्बियाँ सीधे माप लेते हैं, और बहते बॉय लगातार तापमान तथा स्थिति बताते हैं। ये सब मिलकर वह तस्वीर बनाते हैं जो कोई अकेला यंत्र नहीं दे सकता।

कम बर्फ़ का मतलब है ज़्यादा गहरा पानी खुला, और गहरा पानी चमकदार बर्फ़ से ज़्यादा सूर्य ऊर्जा सोखता है। यह अतिरिक्त गर्मी पानी में जमा रहती है और बाद में निकलती है, जो ध्रुवों से दूर के मौसम पैटर्न को भी प्रभावित करती है। यह असर एक फ़ीडबैक लूप की तरह काम करता है — कम बर्फ़ का मतलब ज़्यादा गर्माहट, और ज़्यादा गर्माहट का मतलब और कम बर्फ़। यही एक कारण है कि ध्रुवीय क्षेत्र बाक़ी ग्रह से तेज़ी से गर्म हो रहे हैं।

समुद्री बर्फ़ उन जानवरों के लिए भी ज़रूरी है जो इस पर निर्भर हैं। ध्रुवीय भालू बर्फ़ के किनारे से शिकार करते हैं, सील इसे नर्सरी की तरह इस्तेमाल करती हैं, वॉलरस गोता लगाने के बीच इस पर आराम करते हैं, और आर्कटिक फ़ॉक्स तथा पक्षी उस खाद्य शृंखला पर निर्भर हैं जो इसके नीचे से शुरू होती है। जब बर्फ़ वसंत में पहले पीछे हटती है या शरद में देर से आती है, तो ये सभी प्रभावित होते हैं। कुछ जानवर ज़मीन पर मजबूर हो जाते हैं, जहाँ भोजन कम और प्रतिस्पर्धा ज़्यादा होती है।

समुद्री बर्फ़ का आर्थिक महत्व भी है। आर्कटिक के गर्म होने से नए जहाज़ी मार्ग खुल रहे हैं, जैसे रूस के तट के साथ उत्तरी समुद्री मार्ग। ये मार्ग यूरोप और एशिया के बीच यात्रा का समय और लागत घटाते हैं, लेकिन पर्यावरणीय जोखिम भी बढ़ाते हैं। बर्फ़ीले पानी में तेल रिसाव साफ़ करना गर्म समुद्रों की तुलना में बहुत कठिन होता है, और जहाज़ों का शोर उन समुद्री स्तनधारियों को परेशान कर सकता है जो शिकार और संवाद के लिए ध्वनि पर निर्भर हैं।

भारत समुद्री बर्फ़ शोध में उपग्रह डेटा, अंतरराष्ट्रीय साझेदारियों और अपने आर्कटिक तथा अंटार्कटिक स्टेशनों के अवलोकनों के ज़रिए योगदान देता है। समुद्री बर्फ़ को समझना केवल ध्रुवों को समझना नहीं है। यह उस जलवायु को समझना है जो पृथ्वी के हर तट, हर मानसून और हर फसल के मौसम को आकार देती है।`,
    fact: 'Continuous satellite records of sea ice began in 1979.',
  },
  {
    id: 'polar-fieldwork',
    title: 'Polar Fieldwork',
    tags: ['fieldwork', 'antarctic'],
    text: 'Go behind the scenes of research expeditions collecting data in remote environments.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    alt: 'Remote mountain landscape',
    en: `Polar fieldwork means living in a tent or a research station for weeks or months at a time, often with no way in or out except by ship or aircraft. Everything needed — food, fuel, instruments, spare parts, medicines — has to arrive in one go, because once the weather closes in, no further supply may come for months. Every kilogram is counted, and every item has a priority.

A typical day begins with a weather check. Temperature, wind speed, visibility and the state of the snow decide whether work can proceed. Then teams head out: some to drill ice, some to lower instruments into the ocean, some to dig snow pits and read the layers. Work is divided into short, careful shifts because in extreme cold fingers lose feeling quickly, batteries drain fast, and even plastic equipment can crack.

Ice drilling is a science in itself. Scientists use drills that cut without melting the sample, so that the trapped air and the layer structure remain intact. The extracted core is placed in insulated boxes, kept cold, and transported back to a laboratory. Some cores are stored for years in national archives, so future scientists with better instruments can study them again. Every metre of ice removed is a record that will not be replaced in our lifetime.

Working at sea is even harder. Guiding a ship through ice, taking water samples, measuring temperature and salinity, and deploying instruments to the seafloor each carry risk. Sometimes the ice shifts without warning and the team has to return to the ship immediately. Safety is the first rule: everyone carries a radio, an emergency kit and a clear plan of what to do if things go wrong.

Every measurement is logged with its time and its exact location. Some readings are written by hand, others recorded electronically. This care is essential because, back in the laboratory, these numbers are compared with satellite data, with measurements from other countries, and with historical records that stretch back decades. A single reading becomes part of a global picture that no one country could build alone.

Some instruments are designed to work alone for years between visits. Powered by batteries, solar panels or special cells, they record temperature, salinity, ice thickness or atmospheric composition and transmit the data by satellite. When a team finally returns, they collect the data and check the instrument. Some have been recording quietly for more than a decade.

Polar fieldwork is not just science; it is a test of patience, teamwork and discipline. Every member of a team depends on the others, and a small mistake can have large consequences. That is why every decision is made carefully, and every step planned. It is also why the work is so valuable — the data gathered there simply cannot be obtained anywhere else on Earth.`,
    hi: `ध्रुवीय फील्डवर्क का मतलब है हफ़्तों या महीनों तक तंबुओं या शोध स्टेशनों में रहना, जहाँ आने-जाने का रास्ता केवल जहाज़ या विमान होता है। भोजन, ईंधन, उपकरण, स्पेयर पार्ट्स, दवाइयाँ — सब कुछ एक ही बार में पहुँचाना पड़ता है, क्योंकि मौसम खराब होने पर महीनों तक कोई आपूर्ति नहीं आ सकती। हर किलो वज़न का हिसाब रखना पड़ता है, और हर सामान की प्राथमिकता तय करनी पड़ती है।

एक आम दिन की शुरुआत मौसम की जाँच से होती है। तापमान, हवा की गति, दृश्यता और बर्फ़ की स्थिति देखकर तय होता है कि बाहर काम किया जा सकता है या नहीं। फिर टीमें निकलती हैं — कोई बर्फ़ ड्रिल करने, कोई समुद्र में उपकरण उतारने, कोई बर्फ़ के गड्ढे खोदकर परतें पढ़ने। हर काम छोटी-छोटी पालियों में होता है, क्योंकि अत्यधिक ठंड में उँगलियाँ जल्दी सुन्न हो जाती हैं, बैटरी जल्दी खत्म होती है और प्लास्टिक के उपकरण तक टूट सकते हैं।

बर्फ़ ड्रिल करना अपने आप में एक विज्ञान है। वैज्ञानिक ऐसे ड्रिल का इस्तेमाल करते हैं जो बर्फ़ को पिघलाए बिना काटता है, ताकि अंदर फँसी हवा और परतों की संरचना सुरक्षित रहे। निकाले गए कोर को विशेष बक्सों में रखकर ठंडा रखा जाता है और प्रयोगशाला तक पहुँचाया जाता है। कुछ कोर वर्षों तक राष्ट्रीय संग्रहालयों और शोध केंद्रों में सुरक्षित रखे जाते हैं, ताकि भविष्य के वैज्ञानिक बेहतर उपकरणों से उन्हें दोबारा पढ़ सकें।

समुद्र में काम करना और भी चुनौतीपूर्ण है। बर्फ़ के बीच से जहाज़ को निकालना, पानी के नमूने लेना, तापमान और लवणता मापना, और समुद्र तल तक उपकरण भेजना — हर कदम जोखिम भरा है। कभी-कभी बर्फ़ की चादर अचानक बदल जाती है और टीम को तुरंत जहाज़ पर लौटना पड़ता है। सुरक्षा पहला नियम है — हर व्यक्ति के पास रेडियो, आपातकालीन किट और स्पष्ट योजना होती है कि कुछ गड़बड़ होने पर क्या करना है।

हर माप को समय और सटीक स्थान के साथ दर्ज किया जाता है। कुछ आँकड़े हाथ से लिखे जाते हैं, कुछ इलेक्ट्रॉनिक रूप से दर्ज होते हैं। यह सावधानी इसलिए ज़रूरी है क्योंकि प्रयोगशाला लौटने के बाद इन आँकड़ों को उपग्रह डेटा, अन्य देशों के मापों और दशकों पुराने रिकॉर्ड से मिलाया जाता है। एक अकेला रीडिंग भी वैश्विक तस्वीर का हिस्सा बन जाता है, जिसे कोई अकेला देश नहीं बना सकता।

कुछ उपकरण ऐसे बनाए जाते हैं जो सालभर अपने आप काम करते रहते हैं, बिना किसी व्यक्ति की मौजूदगी के। बैटरी, सौर ऊर्जा या विशेष सेल से चलकर वे तापमान, लवणता, बर्फ़ की मोटाई या वायुमंडलीय संरचना दर्ज करते हैं और उपग्रह के ज़रिए डेटा भेजते हैं। जब टीम अगली बार लौटती है, तो डेटा इकट्ठा करती है और उपकरण की जाँच करती है। कुछ उपकरण दस साल से अधिक समय से चुपचाप काम कर रहे हैं।

ध्रुवीय फील्डवर्क केवल विज्ञान नहीं, धैर्य, टीम-भावना और अनुशासन की परीक्षा भी है। टीम के हर सदस्य का काम दूसरों पर निर्भर करता है, और एक छोटी गलती भी बड़ा परिणाम दे सकती है। इसीलिए हर निर्णय सोच-समझकर लिया जाता है और हर कदम की योजना बनाई जाती है। यही कारण है कि यह काम इतना मूल्यवान है — वहाँ जुटाया गया डेटा पृथ्वी पर कहीं और नहीं मिल सकता।`,
    fact: 'Some polar instruments keep recording on their own for years between visits.',
  },
];

const TAGS = ['all', 'ice', 'climate', 'wildlife', 'himalaya', 'antarctic', 'arctic', 'fieldwork'];
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';

export default function Repository() {
  const [params, setParams] = useSearchParams();
  const [tag, setTag] = useState('all');
  const q = (params.get('q') || '').toLowerCase();

  const list = CARDS.filter((c) =>
    (tag === 'all' || c.tags.includes(tag)) &&
    (!q || `${c.title} ${c.text} ${c.en} ${c.tags.join(' ')}`.toLowerCase().includes(q)));

  return (
    <section aria-labelledby="research-title" className="mt-10 w-full min-w-0">
      <style>{`
        @keyframes repoIn { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        .repo-in { opacity: 0; animation: repoIn .6s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) { .repo-in { opacity: 1; animation: none; } }
      `}</style>

      <div className="flex flex-wrap items-end justify-between gap-4 px-0.5">
        <div>
          <h2 id="research-title" className="font-serif text-2xl font-black text-ink md:text-3xl">Latest research themes</h2>
          <p className="mt-1 text-neutral-600">Read, listen in your language, react, and ask the scientists.</p>
        </div>
        <div>
          <label htmlFor="rq" className="sr-only">Search research</label>
          <input id="rq" type="search" value={params.get('q') || ''} onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
            placeholder="Search krill, glaciers, ice core..." className={`w-64 max-w-full rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm ${focus}`} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
        {TAGS.map((t) => (
          <button key={t} type="button" onClick={() => setTag(t)} aria-pressed={tag === t}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold capitalize transition-colors ${tag === t ? 'border-ink bg-ink text-white' : 'border-neutral-300 bg-white text-ink hover:border-ink'} ${focus}`}>{t}</button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((card, n) => (
          <article key={card.id} style={{ animationDelay: `${n * 0.07}s` }}
            className="repo-in group flex min-w-0 flex-col overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
            <div className="px-[2px] pt-[2px]">
              <div className="relative h-48 overflow-hidden rounded-t-[inherit] bg-slate-100">
                <img src={card.image} alt={card.alt} loading="lazy" decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 flex gap-1.5">
                  {card.tags.map((t) => <span key={t} className="rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold capitalize text-ink">{t}</span>)}
                </div>
                <span className="absolute right-2 top-2 rounded-full bg-ink/80 px-2 py-0.5 text-[11px] font-semibold text-white">🔊 EN · हिन्दी</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-xl font-black text-ink transition-colors duration-200 group-hover:text-slate-700">{card.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-neutral-600">{card.text}</p>
              <Link to={`/research/${card.id}`}
                className={`mt-5 inline-flex items-center gap-2 self-start rounded-lg bg-ink px-5 py-2 font-semibold text-white transition-all duration-200 hover:bg-neutral-800 ${focus}`}>
                Explore <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      {!list.length && <p className="mt-8 text-center text-neutral-600">No themes match your search. Try another word or topic.</p>}
    </section>
  );
}