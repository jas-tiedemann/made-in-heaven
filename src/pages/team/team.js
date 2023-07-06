import React from "react";
import Artist from "../../components/artist/artist";
import imgPerson00 from "../../assets/images/angi-img.webp";
import imgPerson01 from "../../assets/images/ani-img.webp";
import imgPerson02 from "../../assets/images/elise-img.webp";
import imgPerson03 from "../../assets/images/elliot-img.webp";
import imgPerson04 from "../../assets/images/kathi-img.webp";
import imgPerson05 from "../../assets/images/toni-img.webp";
import imgPerson06 from "../../assets/images/lydia-img.webp";
import imgPerson07 from "../../assets/images/mareike-img.webp";
import imgPerson08 from "../../assets/images/slim-img.webp";
import img00 from "../../assets/images/tattoo-schnecke.webp";
import img01 from "../../assets/images/tattoo-blumen.webp";
import img02 from "../../assets/images/tattoo-schädel.webp";
import img03 from "../../assets/images/tattoo-waschbär.webp";
import img04 from "../../assets/images/tattoo-blumen-01.webp";
import img05 from "../../assets/images/tattoo-hirsch.webp";
import img06 from "../../assets/images/piercing-ohr.webp";


const Team = () => {

    const teamInfo = [
        {name: "Angi", imgPerson: imgPerson00, pronouns: "sie/ihr", instaName: "Angii", instaLink: "https://www.instagram.com/milu_tattoo_/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Tattoo, Azubi und Shopmanagerin", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Ani", imgPerson: imgPerson01, pronouns: "sie/ihr", instaName: "Ani Levottomuus", instaLink: "https://www.instagram.com/delightfulsleep/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Elise", imgPerson: imgPerson02, pronouns: "sie/ihr", instaName: "Elise", instaLink: "https://www.instagram.com/elisesam.tattoo/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Elliot", imgPerson: imgPerson03, pronouns: "er/ihm", instaName: "Elliot", instaLink: "https://www.instagram.com/eggs_tattoo/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Kathi", imgPerson: imgPerson04, pronouns: "sie/ihr", instaName: "Onkel Kathi", instaLink: "https://www.instagram.com/onka_tattoo/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Tattoo und Piercing", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Toni", imgPerson: imgPerson05, pronouns: "sie/ihr", instaName: "tattos by toni", instaLink: "https://www.instagram.com/cosmaids.tintcan/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Lydia", imgPerson: imgPerson06, pronouns: "sie/ihr", instaName: "TattooStudio9", instaLink: "https://www.instagram.com/tattoostudio_9_/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Mareike", imgPerson: imgPerson07, pronouns: "sie/ihr", instaName: "Mareike", instaLink: "https://www.instagram.com/graw.ttt/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Tattoo", imgArray:
        [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Slim", imgPerson: imgPerson08, pronouns: "sie/ihnen", instaName: "Alisha/Slim", instaLink: "https://www.instagram.com/fit_for_a_piercing.pt/?igshid=Y2IzZGU1MTFhOQ%3D%3D", position: "Piercing", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        }
    ];

    return (
        <section className="team" id="team-comp">
            <h2 className="team__header header header--medium">Unser Team</h2>
            <div className="team-wrapper">
                {teamInfo.map(x => {
                    return (
                        <Artist
                            key={"key-" + x.name.toLowerCase()}
                            name={x.name}
                            imgPerson={x.imgPerson}
                            pronouns={x.pronouns}
                            instaName={x.instaName}
                            instaLink={x.instaLink}
                            position={x.position}
                            imgArray={x.imgArray}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Team;