app.constant('COUNTRIES', (function() {
var countries = [
        ['Afrikaans (South Africa)','af-ZA','South Africa'],
        ['Albanian (Albania)','sq-AL','Albania'],
        ['Albanian (Kosovo)','sq-KV','Kosovo'],
        ['Arabic (Algeria)','ar-DZ','Algeria'],
        ['Arabic (Egypt)','ar-EG','Egypt'],
        ['Arabic (Jordan)','ar-JO','Jordan'],
        ['Arabic (Kuwait)','ar-KW','Kuwait'],
        ['Arabic (Lebanon)','ar-LB','Lebanon'],
        ['Arabic (Morocco)','ar-MA','Morocco'],
        ['Arabic (Oman)','ar-OM','Oman'],
        ['Arabic (Palestine)','ar-PS','Palestine'],
        ['Arabic (Qatar)','ar-QA','Qatar'],
        ['Arabic (Saudi Arabia)','ar-SA','Saudi Arabia'],
        ['Arabic (Tunisia)','ar-TN','Tunisia'],
        ['Arabic (UAE)','ar-AE','UAE'],
        ['Arabic (Yemen)','ar-YE','Yemen'],
        ['Armenian (Armenia)','hy-AM','Armenia'],
        ['Azeri (Azerbaijan)','az-AZ','Azerbaijan'],
        ['Belarusian (Belarus)','be-BY','Belarus'],
        ['Bengali (Bangladesh)','bn-BN','Bangladesh'],
        ['Bengali (India)','bn-IN','India'],
        ['Bosnian (Bosnia)','bs-BA','Bosnia'],
        ['Bulgarian (Bulgaria)','bg-BG','Bulgaria'],
        ['Burmese (Myanmar)','bu-MM','Myanmar'],
        ['Catalan (Spain)','ca-ES','Spain'],
        ['Chinese (Hong Kong)','zh-HK','Hong Kong'],
        ['Chinese (Philippines)','zh-PH','Philippines'],
        ['Chinese (PRC)','zh-CN','China'],
        ['Chinese (Singapore)','zh-SG','Singapore'],
        ['Chinese (Taiwan)','zh-TW','Taiwan'],
        ['Croatian (Croatia)','hr-HR','Croatia'],
        ['Czech (Czech Republic)','cs-CZ','Czech Republic'],
        ['Danish (Denmark)','da-DK','Denmark'],
        ['Dutch (Netherlands)','nl-NL','Netherlands'],
        ['English (Australia)','en-AU','Australia'],
        ['English (Austria)','en-AT','Austria'],
        ['English (Belgium)','en-BE','Belgium'],
        ['English (Botswana)','en-BW','Botswana'],
        ['English (Cambodian)','en-KH','Cambodia'],
        ['English (Cameroon)','en-CM','Cameroon'],
        ['English (Canada)','en-CA','Canada'],
        ['English (Caribbean)','en-CB','Caribbean'],
        ['English (Czech Republic)','en-CZ','Czech Republic'],
        ['English (Denmark)','en-DK','Denmark'],
        ['English (Finland)','en-FI','Finland'],
        ['English (France)','en-FR','France'],
        ['English (Germany)','en-DE','Germany'],
        ['English (Greece)','en-GR','Greece'],
        ['English (Hong Kong)','en-HK','Hong Kong'],
        ['English (Hungary)','en-HU','Hungary'],
        ['English (Iceland)','(En _ IS)','Iceland'],
        ['English (India)','en-IN','India'],
        ['English (Indonesia)','en-ID','Indonesia'],
        ['English (Ireland)','en-IE','Ireland'],
        ['English (Italy)','en-IT','Italy'],
        ['English (Lesotho)','en-LS','Lesotho'],
        ['English (Malaysia)','en-MY','Malaysia'],
        ['English (Malta)','en-MT','Malta'],
        ['English (Mauritius)','en-MU','Mauritius'],
        ['English (Multiple Markets)','MM-GB','Multiple Markets'],
        ['English (Namibia)','en-NA','Namibia'],
        ['English (Netherlands)','en-NL','Netherlands'],
        ['English (New Zealand)','en-NZ','New Zealand'],
        ['English (Nigeria)','en-NG','Nigeria'],
        ['English (Norway)','en-NO','Norway'],
        ['English (Philippines)','en-PH','Philippines'],
        ['English (Poland)','en-PL','Poland'],
        ['English (Portugal)','en-PT','Portugal'],
        ['English (PRC)','en-CN','China'],
        ['English (Romania)','en-RO','Romania'],
        ['English (Singapore)','en-SG','Singapore'],
        ['English (South Africa)','en-ZA','South Africa'],
        ['English (Spain)','en-ES','Spain'],
        ['English (Swaziland)','en-SZ','Swaziland'],
        ['English (Sweden)','en-SE','Sweden'],
        ['English (Switzerland)','en-CH','Switzerland'],
        ['English (Taiwan)','en-TW','Taiwan'],
        ['English (Thailand)','en-TH','Thailand'],
        ['English (Trinidad)','en-TT','Trinidad'],
        ['English (United Kingdom)','en-GB','UK'],
        ['English (United States)','en-US','United States'],
        ['English (Vietnam)','en-VN','Vietnam'],
        ['English (Zimbabwe)','en-ZW','Zimbabwe'],
        ['Estonian (Estonia)','et-EE','Estonia'],
        ['Farsi (Iran)','fa-IR','Iran'],
        ['Filipino (Philippines)','fil-PH','Philippines'],
        ['Finnish (Finland)','fi-FI','Finland'],
        ['Flemish (Belgium)','nl-BE','Belgium'],
        ['French (Algeria)','fr-DZ','Algeria'],
        ['French (Belgium)','fr-BE','Belgium'],
        ['French (Cameroon)','fr-CM','Cameroon'],
        ['French (Canada)','fr-CA','Canada'],
        ['French (France)','fr-FR','France'],
        ['French (Luxembourg)','bf-LU','Belgium'],
        ['French (Mauritius)','fr-MU','Mauritius'],
        ['French (Morocco)','fr-MA','Morocco'],
        ['French (Switzerland)','fr-CH','Switzerland'],
        ['Fulah (Nigeria)','ff-NG','Nigeria'],
        ['Georgian (Georgia)','ka-GE','Georgia'],
        ['German (Austria)','de-AT','Austria'],
        ['German (Germany)','de-DE','Germany'],
        ['German (Switzerland)','de-CH','Switzerland'],
        ['Greek (Cyprus)','el-CY','Cyprus'],
        ['Greek (Greece)','el-GR','Greece'],
        ['Gujarati (India)','gu-IN','India'],
        ['Hausa (Nigeria)','ha-NG','Nigeria'],
        ['Hebrew (Israel)','he-IL','Israel'],
        ['Hindi (India)','hi-IN','India'],
        ['Hungarian (Hungary)','hu-HU','Hungary'],
        ['Icelandic (Iceland)','is-IS','Iceland'],
        ['Igbo (Nigeria)','ig-NG','Nigeria'],
        ['Indonesian (Indonesia)','id-ID','Indonesia'],
        ['Irish (Ireland)','ga-IE','Ireland'],
        ['Italian (Italy)','it-IT','Italy'],
        ['Italian (Switzerland)','it-CH','Switzerland'],
        ['Japanese (Japan)','ja-JP','Japan'],
        ['Kanuri (Nigeria)','kr-NG','Nigeria'],
        ['Kazakh (Kazakhstan)','kk-KZ','Kazakhstan'],
        ['Khmer (Cambodian)','km-KH','Cambodia'],
        ['Kinyarwandan (Rwanda)','rw-RW','Rwanda'],
        ['Korean (Korea)','ko-KR','Korea'],
        ['Kurdish (Kurdistan)','ku-KU','Kurdistan'],
        ['Kyrgyz (Kyrgyzstan)','ky-KG','Kyrgyzstan'],
        ['Lao (Laos)','la-LA','Laos'],
        ['Latvian (Latvia)','lv-LV','Latvia'],
        ['Lithuanian (Lithuania)','lt-LT','Lithuania'],
        ['Luxembourgish (Luxembourg)','lu-LU','Luxemburg'],
        ['Macedonian (Macedonia)','mk-MK','Macedonia'],
        ['Malay (Malaysia)','ms-MY','Malaysia'],
        ['Malayalam (India)','ml-IN','India'],
        ['Maltese (Malta)','mt-MT','Malta'],
        ['Moldovan (Moldavia)','mo-MO','Moldavia'],
        ['Moldovan (Moldova)','MO-MD','Moldova'],
        ['Mongolian','mn-MN','Mongolia'],
        ['Montenegran (Montenegro)','ME-ME','Montenegro'],
        ['Nepali (Nepal)','ne-NE','Nepal'],
        ['Norwegian Bokmal (Norway)','no-NO','Norway'],
        ['Persian (Iran)','fa-IR','Iran'],
        ['Persian (Iran) (Farsi)','fa-IR','Iran'],
        ['Polish (Poland)','pl-PL','Poland'],
        ['Portuguese (Angola)','pt-AO','Angola'],
        ['Portuguese (Brazil)','pt-BR','Brazil'],
        ['Portuguese (Mozambique)','pt-MZ','Mozambique'],
        ['Portuguese (Portugal)','pt-PT','Portugal'],
        ['Punjabi (India)','pa-IN','India'],
        ['Punjabi (Pakistan)','pa-PK','Pakistan'],
        ['Romanian (Romania)','ro-RO','Romania'],
        ['Russian (Estonia)','ru-EE','Estonia'],
        ['Russian (Latvia)','ru-LV','Latvia'],
        ['Russian (Lithuania)','ru-LT','Lithuania'],
        ['Russian (Russia)','ru-RU','Russia Serbian (Bosnia, and Herzegovina,Cyrillic)'],
        ['Simplified Chinese (Hong Kong)','zh-cn-HK','Hong Kong'],
        ['Simplified Chinese (Malaysia)','ZH - CN - MY','Malaysia'],
        ['Sinhala (Sri Lanka)','si-LK','Sri Lanka'],
        ['Slovak (Slovakia)','sk-SK','Slovakia'],
        ['Slovenian (Slovenia)','sl-SI','Slovenia'],
        ['Sotho (South Africa)','ns-ZA','South Africa'],
        ['Spanish (Argentina)','es-AR','Argentina'],
        ['Spanish (Bolivia)','es-BO','Bolivia'],
        ['Spanish (Chile)','es-CL','Chile'],
        ['Spanish (Colombia)','es-CO','Colombia'],
        ['Spanish (Costa Rica)','es-CR','Costa Rica'],
        ['Spanish (Dominican Republic)','es-DO','Dominican Republic'],
        ['Spanish (Ecuador)','es-EC','Ecuador'],
        ['Spanish (El Salvador)','es-SV','Salvador'],
        ['Spanish (Guatemala)','es-GT','Guatemala'],
        ['Spanish (Honduras)','es-HN','Honduras'],
        ['Spanish (International Sort)','ES-EM','Multiple Markets'],
        ['Spanish (Mexico)','es-MX','Mexico'],
        ['Spanish (Panama)','es-PA','Panama'],
        ['Spanish (Paraguay)','es-PY','Paraguay'],
        ['Spanish (Peru)','es-PE','Peru'],
        ['Spanish (Puerto Rico)','es-PR','Puerto Rico'],
        ['Spanish (Spain)','es-ES','Spain'],
        ['Spanish (Uruguay)','es-UR','Uruguay'],
        ['Spanish (Venezuela)','es-VE','Venezuela'],
        ['Swahili (Kenya)','sw-KE','Kenya'],
        ['Swedish (Sweden)','sv-SE','Sweden'],
        ['Tamil (India)','ta-IN','India'],
        ['Thai (Thailand)','th-TH','Thailand'],
        ['Traditional Chinese (Hong Kong)','zh-cn-HK','Hong Kong'],
        ['Traditional Chinese (Taiwan)','zh-tw-HK','Hong Kong'],
        ['Tswana (South Africa)','tn-ZA','South Africa'],
        ['Turkish (Cyprus)','tr-CY','Cyprus'],
        ['Turkish (Turkey)','tr-TR','Turkey'],
        ['Turkmen (Turkmenistan)','ar-BH','Turkmenistan'],
        ['Ukrainian (Ukraine)','uk-UA','Ukraine'],
        ['Urdu (Pakistan)','ur-PK','Pakistan'],
        ['Uzbek (Uzbekistan, Cyrillic)','UZ-CY','Uzbekistan'],
        ['Uzbek (Uzbekistan, Latin)','UZ-LT','Uzbekistan'],
        ['Vietnamese (Vietnam)','vi-VN','Vietnam'],
        ['Welsh (United Kingdom)','cy-GB','UK'],
        ['Xhosa (South Africa)','xh-ZA','South Africa'],
        ['Yoruba (Nigeria)','yo-NG','Nigeria'],
        ['Zulu (South Africa)','zu-ZA','South Africa']
    ]
    return {
        COUNTRIES: countries
    }
})());