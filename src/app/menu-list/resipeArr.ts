interface IIngredients{
    name:string,amount:string
}
export interface IRecipe{
    title:string,
    image:string,
    description:string,
    ingredients:IIngredients[]
}
export const recipes:IRecipe[]=[
  {
    title: "Лазанья",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH76K-_IWspVVt3QOxIbRMYIMkhJEd_CoRj5WrYI_Qog&s=10",
    description: "С появлением в магазинах готовых листов для лазаньи готовить это вкусное блюдо в домашних условиях стало намного проще. Есть много рецептов приготовления классической лазаньи. Предлагаем сделать запеканку с мясной начинкой, как в пасте болоньезе. А для мягкости еще и добавить сыр.",
    ingredients: [
      { name: "Мясной фарш", amount: "160 г" },
      { name: "Помидор", amount: "36 г" },
      { name: "Репчатый лук", amount: "32 г" },
      { name: "Листы лазаньи", amount: "8 г" },
      { name: "Твердый сыр", amount: "20 г" },
      { name: "Молоко", amount: "100 г" }
    ]
  },
  {
    title: "Шарлотка",
    image: "https://img.iamcook.ru/2022/upl/recipes/zen/u-7c11b414e52a8ce13406ff76580f2e76.JPG",
    description: "Шарлотка — всеми любимый десерт, представляющий собой пирог из бисквитного теста и яблок. Принято считать, что шарлотка появилась во Франции. Традиционная шарлотка с яблоками готовится очень просто и из доступных ингредиентов. Самое главное в приготовлении шарлотки — это хорошо взбить бисквитное тесто.",
    ingredients: [
      { name: "Яблоки", amount: "3-4 шт." },
      { name: "Куриное яйцо", amount: "3 шт." },
      { name: "Пшеничная мука", amount: "1 ст." },
      { name: "Сахар", amount: "1 ст." }
    ]
  },
  {
    title: "Борщ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3PzT6eenrRBm6FzDPmbKOF4BcZb9HZZqLWx16yX25g&s=10",
    description: "Традиционное славянское блюдо, насыщенный и густой суп на основе свеклы, который приобретает свой узнаваемый яркий цвет и неповторимый кисло-сладкий вкус. Подается со сметаной и зеленью.",
    ingredients: [
      { name: "Говядина", amount: "400 г" },
      { name: "Свекла", amount: "2 шт." },
      { name: "Капуста белокочанная", amount: "300 г" },
      { name: "Картофель", amount: "3 шт." },
      { name: "Морковь", amount: "1 шт." },
      { name: "Томатная паста", amount: "2 ст. л." }
    ]
  },
  {
    title: "Плов",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAy-GwCKf1IOQc5vShgNH5EPU199BLux0vAHnsHIIbA&s=10",
    description: "Классическое восточное блюдо из рассыпчатого риса, нежного мяса, моркови и ароматных специй. Правильный плов готовится в казане и обладает насыщенным пряным вкусом.",
    ingredients: [
      { name: "Рис (аланга или басмати)", amount: "500 г" },
      { name: "Баранина или говядина", amount: "500 г" },
      { name: "Морковь", amount: "500 г" },
      { name: "Лук репчатый", amount: "2 шт." },
      { name: "Масло растительное", amount: "100 мл" },
      { name: "Зира", amount: "1 ч. л." }
    ]
  },
  {
    title: "Карбонара",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDd_iSuKyVCud2LJgkblUWFUrj5IDBUb15fsijROMuPA&s=10",
    description: "Знаменитая итальянская паста родом из Рима. Готовится с добавлением гуанчале или бекона, сыра пекорино романо или пармезана, яичных желтков и черного перца без использования сливок.",
    ingredients: [
      { name: "Спагетти", amount: "400 г" },
      { name: "Бекон или панчетта", amount: "150 г" },
      { name: "Яичные желтки", amount: "4 шт." },
      { name: "Сыр пармезан", amount: "80 г" },
      { name: "Черный перец", amount: "по вкусу" }
    ]
  },
  {
    title: "Оливье",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-dKnWpmu9SSsz2TvgL32ErpUu2rnnAQxC5c6J0faPoA&s=10",
    description: "Традиционный праздничный салат, ставший классикой. Сочетает в себе отварные овощи, яйца, соленые огурцы, зеленый горошек и мясо или колбасу, заправленные майонезом.",
    ingredients: [
      { name: "Картофель", amount: "4 шт." },
      { name: "Морковь", amount: "2 шт." },
      { name: "Яйца куриные", amount: "4 шт." },
      { name: "Колбаса вареная", amount: "300 г" },
      { name: "Огурцы соленые", amount: "3 шт." },
      { name: "Горошек зеленый", amount: "1 банка" },
      { name: "Майонез", amount: "по вкусу" }
    ]
  },
  {
    title: "Греческий салат",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbRn9V-iO0gx3JRYOguXk85DQi2lQE0nLimBtHStSCg&s=10",
    description: "Свежий и легкий средиземноморский салат из крупных кусочков помидоров, огурцов, болгарского перца, лука, маслин и сыра фета, заправленный оливковым маслом с орегано.",
    ingredients: [
      { name: "Помидоры", amount: "3 шт." },
      { name: "Огурцы", amount: "2 шт." },
      { name: "Перец болгарский", amount: "1 шт." },
      { name: "Сыр фета", amount: "150 г" },
      { name: "Маслины", amount: "50 г" },
      { name: "Оливковое масло", amount: "2 ст. л." }
    ]
  },
  {
    title: "Блины классические",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUwgNo65ynYc1sHpzoDQjh84ODB9OnTNCEEIP1EDoJfmlmgL05jmGdYw&s=10",
    description: "Тонкие, румяные и нежные блины на молоке. Идеально подходят как для завтрака, так и для фарширования различными начинками — сладкими или солеными.",
    ingredients: [
      { name: "Молоко", amount: "500 мл" },
      { name: "Мука пшеничная", amount: "200 г" },
      { name: "Яйца куриные", amount: "2 шт." },
      { name: "Сахар", amount: "1 ст. л." },
      { name: "Масло растительное", amount: "2 ст. л." }
    ]
  },
  {
    title: "Цезарь с курицей",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsNuzazZbcHlbiHj5EISS4W4w3V7G_O3AX5NbtkMicbA&s=10",
    description: "Популярный салат с хрустящими листьями салата романо, сочным куриным филе, обжаренными сухариками, сыром пармезан и фирменным соусом.",
    ingredients: [
      { name: "Куриное филе", amount: "300 г" },
      { name: "Салат романо", amount: "1 пучок" },
      { name: "Белый хлеб для сухариков", amount: "100 г" },
      { name: "Сыр пармезан", amount: "50 г" },
      { name: "Соус цезарь", amount: "3 ст. л." }
    ]
  },
  {
    title: "Сырники",
    image: "https://images.gastronom.ru/ECh_I6w3gTB8I7G27v52MRRWTmTaZMlR59WsKdw2Qas/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzliOTRhNTg5LTlmNzYtNGNlNS04MTgzLTc4MjU0MGI0ZGI3Yy5qcGc.webp",
    description: "Традиционное творожное блюдо для идеального завтрака. Нежные внутри с легкой золотистой корочкой снаружи, отлично сочетаются со сметаной, медом или ягодами.",
    ingredients: [
      { name: "Творог (9%)", amount: "400 г" },
      { name: "Яйцо", amount: "1 шт." },
      { name: "Сахар", amount: "2 ст. л." },
      { name: "Мука", amount: "3 ст. л." },
      { name: "Масло для жарки", amount: "2 ст. л." }
    ]
  },
  {
    title: "Котлеты по-киевски",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1itkGVX8jf2vqCb_O3wP7pgpW9sDgW5CvVERQ7MShKo-c798sR3rJkCKIZyI1gTt3AsaW7YbUKvENmquy2mLe4c9jMrsfG8zhcEzOSMk&s=10",
    description: "Нежное куриное филе, в которое завернут кусочек ароматного сливочного зелёного масла. Котлета панируется в сухарях и обжаривается до хрустящей корочки.",
    ingredients: [
      { name: "Куриное филе", amount: "4 шт." },
      { name: "Сливочное масло", amount: "100 г" },
      { name: "Зелень (укроп, петрушка)", amount: "по вкусу" },
      { name: "Яйца", amount: "2 шт." },
      { name: "Панировочные сухари", amount: "100 г" }
    ]
  },
  {
    title: "Жаркое по-домашнему",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1aOdPOj6h8QGWyTzAkMtCl71WkrcbNAsCZNSTn5erQ&s",
    description: "Сытное домашнее блюдо из кусочков мяса и картофеля, тушеных с луком, морковью и специями в горшочках или глубокой сковороде.",
    ingredients: [
      { name: "Свинина или говядина", amount: "500 г" },
      { name: "Картофель", amount: "6 шт." },
      { name: "Лук репчатый", amount: "2 шт." },
      { name: "Морковь", amount: "1 шт." },
      { name: "Бульон или вода", amount: "2 ст." }
    ]
  },
  {
    title: "Манты",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaaxnHmeMTHRDE0Hup_7AQOYKZE69IjccqT1gIFVUMuQ&s=10",
    description: "Традиционное азиатское блюдо из мелко рубленного мяса с луком в тонко раскатанном тесте, приготовленное на пару в специальной мантоварке.",
    ingredients: [
      { name: "Мука", amount: "500 г" },
      { name: "Вода", amount: "200 мл" },
      { name: "Мясо (баранина/говядина)", amount: "600 г" },
      { name: "Лук репчатый", amount: "400 г" },
      { name: "Жир курдючный", amount: "50 г" }
    ]
  },
  {
    title: "Уха классическая",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQOyfJni1bYK4MhHpacas-SKJMegtNbcx0zYdYD5R-w&s",
    description: "Прозрачный и наваристый рыбный суп, приготовленный из свежей рыбы с добавлением картофеля, лука, моркови и пряных трав.",
    ingredients: [
      { name: "Рыба (форель, судак)", amount: "600 г" },
      { name: "Картофель", amount: "3 шт." },
      { name: "Лук репчатый", amount: "1 шт." },
      { name: "Морковь", amount: "1 шт." },
      { name: "Лавровый лист", amount: "2 шт." }
    ]
  },
  {
    title: "Пицца Маргарита",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dt9f2hA80sxBe8rHo9pEOvptRFQ1VeBsVttXv_VNwA&s=10",
    description: "Классическая итальянская пицца с тонким хрустящим тестом, сочным томатным соусом, свежей моцареллой и ароматными листьями базилика.",
    ingredients: [
      { name: "Тесто для пиццы", amount: "1 основа" },
      { name: "Томатный соус", amount: "4 ст. л." },
      { name: "Сыр моцарелла", amount: "150 г" },
      { name: "Базилик свежий", amount: "по вкусу" }
    ]
  },
  {
    title: "Куриный суп с лапшой",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvBUDy_3czh2nvgr5c0brqlh7Bjqi68RTnem6idv9YQ&s=10",
    description: "Легкий, золотистый и ароматный суп на курином бульоне с домашней или покупной лапшой, морковью и зеленью. Отлично согревает и придает сил.",
    ingredients: [
      { name: "Куриные части для бульона", amount: "500 г" },
      { name: "Лапша", amount: "70 г" },
      { name: "Картофель", amount: "2 шт." },
      { name: "Морковь", amount: "1 шт." },
      { name: "Лук", amount: "1 шт." }
    ]
  },
  {
    title: "Хачапури по-аджарски",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpD3qRpEiDadzIMQqirwj-PLxZWZRsU2LU0KfMGaO7xw&s=10",
    description: "Знаменитая грузинская выпечка в форме лодочки, наполненная тягучим рассольным сыром сулугуни и имертинским сыром, с добавлением сливочного масла и сырого желтка.",
    ingredients: [
      { name: "Дрожжевое тесто", amount: "400 г" },
      { name: "Сыр сулугуни", amount: "250 г" },
      { name: "Сыр имертинский", amount: "150 г" },
      { name: "Яйцо куриное", amount: "1 шт. на порцию" },
      { name: "Сливочное масло", amount: "30 г" }
    ]
  },
  {
    title: "Лагман",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbY8jG8ayHOsqJGyVEB9CUzWzgKEvkemIgC3V87emR0A&s=10",
    description: "Популярное среднеазиатское блюдо, состоящее из вытянутой вручную длинной лапши, густой подливы из мяса и обжаренных овощей (перца, лука, томатов, редьки).",
    ingredients: [
      { name: "Лагманная лапша", amount: "400 г" },
      { name: "Говядина или баранина", amount: "400 г" },
      { name: "Перец болгарский", amount: "2 шт." },
      { name: "Томаты", amount: "2 шт." },
      { name: "Лук репчатый", amount: "1 шт." },
      { name: "Чеснок", amount: "3 зубчика" }
    ]
  },
  {
    title: "Паста Болоньезе",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKw2VaNsKNDOO0HBEyiizparuPt6R24AZKskC3ejUwsLlz-B2ESD0SehV&s=10",
    description: "Знаменитый итальянский соус из мясного фарша, томатов, лука и моркови, который подается с пастой и тертым пармезаном.",
    ingredients: [
      { name: "Спагетти или тальятелле", amount: "400 г" },
      { name: "Мясной фарш (говядина + свинина)", amount: "400 г" },
      { name: "Томаты в собственном соку", amount: "400 г" },
      { name: "Лук репчатый", amount: "1 шт." },
      { name: "Морковь", amount: "1 шт." },
      { name: "Чеснок", amount: "2 зубчика" }
    ]
  },
  {
    title: "Окрошка классическая",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w8fzsi6KmcOT_UXP6yOAvYbVKVsulaN6-NmsJG7ETw&s=10",
    description: "Традиционный холодный суп русской кухни на основе кваса или кефира с добавлением отварного мяса, свежих огурцов, редиса, зелени и вареных яиц.",
    ingredients: [
      { name: "Квас хлебный", amount: "1.5 л" },
      { name: "Отварное мясо или колбаса", amount: "300 г" },
      { name: "Огурцы свежие", amount: "3 шт." },
      { name: "Редис", amount: "6 шт." },
      { name: "Яйца вареные", amount: "4 шт." },
      { name: "Зелень и сметана", amount: "по вкусу" }
    ]
  }
];
