/*{
  "media_url": "https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/349288424_963309604716086_5807062929693295023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=oTuSWw8stocAX9_J0g-&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBtpSYn4GLZ-XT4Yvka6JVzNmvIL_0JIIiMhCGXJa07qQ&oe=64D512E5",
  "media_type": "CAROUSEL_ALBUM",
  "permalink": "https://www.instagram.com/p/CswiPT0uoFF/",
  "caption": "🌸🌷🌸🌷
#bohemianknotlessbraids #knotlessbraids #chicagobraider #chicagobraids #braids #boxbraids",
  "shortcode": "CswiPT0uoFF",
  "id": "18365803378027152"
}*/
//create interface called InstagramPost for the above json object
export interface InstagramPost {
  media_url: string;
  media_type: string;
  permalink: string;
  caption: string;
  shortcode: string;
  id: string;
}