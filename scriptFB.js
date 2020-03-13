// Remove Profile timeline footer pagelet (language, footer, ...)
const a = document.getElementById("profile_timeline_rhs_footer_pagelet");
a.parentNode.removeChild(a);

// Remove Chat sidebar
const chat = document.querySelectorAll('');

// New Facebook
const spans = document.getElementsByTagName('span');
const spanInnerText = Array.from(spans).map(el => el.innerText);

const STRING = 'Quyền riêng tư · Điều khoản · Quảng cáo · Lựa chọn quảng cáo  · Cookie · Xem thêm · Facebook © 2020';

let footer_pagelet;

spanInnerText.forEach((el, id) => {
	if(el === STRING) footer_pagelet = spans[id];
});

console.log(footer_pagelet);