import fetchMock from 'jest-fetch-mock';
import getActivities from './getActivities';


const auth = {
    "type": "amadeusOAuth2Token",
    "username": "adrianafarmstrong@gmail.com",
    "application_name": "Destination Sensation",
    "client_id": "ZwX9RdSVHRQTTidG47EUnthzRk4mPFNc",
    "token_type": "Bearer",
    "access_token": "2H8oAjPIQZGrMBiuUPD1ywA58D2J",
    "expires_in": 1799,
    "state": "approved",
    "scope": ""
}

beforeAll(() => {
    fetchMock.enableMocks();
});

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('getActivities', () => {
    it('fetches and processes activities data correctly', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({
            "data": [
                {
                    "type": "activity",
                    "id": "3278559",
                    "self": {
                        "href": "https://test.api.amadeus.com/v1/shopping/activities/3278559",
                        "methods": [
                            "GET"
                        ]
                    },
                    "name": "London Essentials - London in under two hours Free Walking Tour (Available in English)",
                    "description": "<p>Would you like to see the city with a native English-speaking tour guide who has had the honor of being a full-time tour guide in multiple European cities since 2014? Then read on. 👇<br><br>Through years of experience, I have learned that <strong>these tours are most enjoyable</strong> for you <strong>if I hone it down to just the most exciting stops and the most interesting stories.<br></strong><br>Alfred Hitchcock once said \"the length of a film should be directly related to the endurance of the human bladder,\" and I think that applies doubly so to a tour. You're on holiday, I appreciate that. <strong>You want to see the main sites, take the best photos, maybe laugh a little, and then head off on to the next adventure.<br></strong><br>With that in mind, I keep the tour to an entertaining one hour and fifty minutes. During that time we will see the main sites, allowing you to take photos of:</p><ul><li><strong>Buckingham Palace</strong></li><li><strong>Houses of Parliament</strong></li><li><strong>\"Big Ben\"</strong></li><li><strong>Westminster Abbey</strong></li><li><strong>Trafalgar Square and Nelson's Column</strong></li><li><strong>Horse Guards Parade</strong></li><li><strong>Wellington Arch&nbsp;</strong></li><li><strong>St Martin's In The Field</strong></li><li><strong>National Gallery</strong></li><li><strong>Apsley House</strong></li><li><strong>RAF Bomber Command Memorial</strong></li><li><strong>The Commonwealth Gates</strong></li><li><strong>St James' Palace</strong></li><li><strong>The Mall and Pall Mall</strong></li><li><strong>Crimean War/Nightingale Memorial</strong></li><li><strong>Waterloo Place</strong></li><li><strong>10 Downing Street</strong></li><li><strong>Churchill War Rooms<br></strong><br></li><li><strong>On Monday, Wednesday, Friday and Sunday the 11am tour will see and hear the army band march by us for the Changing of the Guard ceremony. Unless it is cancelled due to rain.</strong></li></ul><p><br></p><p><strong>More important than the sites themselves are the stories. Little insightful or interesting anecdotes</strong>; what the little horse steps are at Waterloo Place, why Constitution Hill is called that when we don't... um.. have one, tales from the Battle of Britain, the Gunpowder Plot, what the Queen did when she woke up to find a drunken man had climbed the walls of Buckingham Palace and broken into her bedroom at 7am, etc, etc.<br><br>Having done these tours for the better part of a decade, I can usually field any history question you may have about the nation or the city, and can also offer suggestions of the best places in the city for gin, pretentious coffee (my vice), or the most memorable dining experiences with something unique to them.<br>I hope to see you soon,<br>Theo</p><p>Free tour: Book for free and pay what you want at the end</p>",
                    "geoCode": {
                        "latitude": 51.502593,
                        "longitude": -0.150855
                    },
                    "rating": "4.4",
                    "price": {
                        "amount": "0.0"
                    },
                    "pictures": [
                        "https://d1i21eq0w7p1n3.cloudfront.net/zu5wzuheosbpzj2yfbeh4n1dinil",
                        "https://d1i21eq0w7p1n3.cloudfront.net/gyaj0enxklkc6c5599ptstd02x2x",
                        "https://d1i21eq0w7p1n3.cloudfront.net/3y0qfcro3hyt5iix77u0w5fn2zfn",
                        "https://d1i21eq0w7p1n3.cloudfront.net/no8w5mr1ujbs0u7fnlatvi5sbj1z",
                        "https://d1i21eq0w7p1n3.cloudfront.net/ha0ai315ks2a59we20k4wsd29a92"
                    ],
                    "bookingLink": "https://www.guruwalk.com/walks/41165-london-essentials-london-in-under-two-hours-free-walking-tour?ref=ojlgpuf3oo1nuk2s74m5",
                    "minimumDuration": "2 hours"
                }
            ],
            "meta": {
                "count": 2,
                "links": {
                    "self": "https://test.api.amadeus.com/v1/shopping/activities?latitude=51.50988&longitude=-0.15509&radius=1"
                }
            }
        }));

        const result = await getActivities(auth, '51.50988', '-0.15509');
        expect(result).toEqual([{
            name: 'London Essentials - London in under two hours Free Walking Tour (Available in English)',
            geoCode: {
                "latitude": 51.502593,
                "longitude": -0.150855
            },
            description: {
                short: undefined,
                full: "<p>Would you like to see the city with a native English-speaking tour guide who has had the honor of being a full-time tour guide in multiple European cities since 2014? Then read on. 👇<br><br>Through years of experience, I have learned that <strong>these tours are most enjoyable</strong> for you <strong>if I hone it down to just the most exciting stops and the most interesting stories.<br></strong><br>Alfred Hitchcock once said \"the length of a film should be directly related to the endurance of the human bladder,\" and I think that applies doubly so to a tour. You're on holiday, I appreciate that. <strong>You want to see the main sites, take the best photos, maybe laugh a little, and then head off on to the next adventure.<br></strong><br>With that in mind, I keep the tour to an entertaining one hour and fifty minutes. During that time we will see the main sites, allowing you to take photos of:</p><ul><li><strong>Buckingham Palace</strong></li><li><strong>Houses of Parliament</strong></li><li><strong>\"Big Ben\"</strong></li><li><strong>Westminster Abbey</strong></li><li><strong>Trafalgar Square and Nelson's Column</strong></li><li><strong>Horse Guards Parade</strong></li><li><strong>Wellington Arch&nbsp;</strong></li><li><strong>St Martin's In The Field</strong></li><li><strong>National Gallery</strong></li><li><strong>Apsley House</strong></li><li><strong>RAF Bomber Command Memorial</strong></li><li><strong>The Commonwealth Gates</strong></li><li><strong>St James' Palace</strong></li><li><strong>The Mall and Pall Mall</strong></li><li><strong>Crimean War/Nightingale Memorial</strong></li><li><strong>Waterloo Place</strong></li><li><strong>10 Downing Street</strong></li><li><strong>Churchill War Rooms<br></strong><br></li><li><strong>On Monday, Wednesday, Friday and Sunday the 11am tour will see and hear the army band march by us for the Changing of the Guard ceremony. Unless it is cancelled due to rain.</strong></li></ul><p><br></p><p><strong>More important than the sites themselves are the stories. Little insightful or interesting anecdotes</strong>; what the little horse steps are at Waterloo Place, why Constitution Hill is called that when we don't... um.. have one, tales from the Battle of Britain, the Gunpowder Plot, what the Queen did when she woke up to find a drunken man had climbed the walls of Buckingham Palace and broken into her bedroom at 7am, etc, etc.<br><br>Having done these tours for the better part of a decade, I can usually field any history question you may have about the nation or the city, and can also offer suggestions of the best places in the city for gin, pretentious coffee (my vice), or the most memorable dining experiences with something unique to them.<br>I hope to see you soon,<br>Theo</p><p>Free tour: Book for free and pay what you want at the end</p>"
            },
            rating: '4.4', // May be no rating
            pictures: [
                "https://d1i21eq0w7p1n3.cloudfront.net/zu5wzuheosbpzj2yfbeh4n1dinil",
                "https://d1i21eq0w7p1n3.cloudfront.net/gyaj0enxklkc6c5599ptstd02x2x",
                "https://d1i21eq0w7p1n3.cloudfront.net/3y0qfcro3hyt5iix77u0w5fn2zfn",
                "https://d1i21eq0w7p1n3.cloudfront.net/no8w5mr1ujbs0u7fnlatvi5sbj1z",
                "https://d1i21eq0w7p1n3.cloudfront.net/ha0ai315ks2a59we20k4wsd29a92"
            ],
            price: {
                "amount": "0.0"
            }
        }]);
    });

    it('throws an error when the API call fails', async () => {
        fetchMock.mockReject(new Error('API failure'));
        await expect(getActivities(auth, '51.50988', '-0.15509')).rejects.toThrow();
    });
});

// getActivities.test.ts