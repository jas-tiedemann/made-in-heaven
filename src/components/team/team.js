import React from "react";
import Artist from "../artist/artist";
import imgPerson00 from "../../assets/images/person.webp";
import imgPerson02 from "../../assets/images/person02.webp";
import imgPerson03 from "../../assets/images/person03.webp";
import imgPerson04 from "../../assets/images/person04.webp";
import imgPerson05 from "../../assets/images/person05.webp";
import imgPerson06 from "../../assets/images/person06.webp";
import imgPerson07 from "../../assets/images/person07.webp";
import imgPerson08 from "../../assets/images/person08.webp";
import imgPerson09 from "../../assets/images/person09.webp";
import img00 from "../../assets/images/tattoo-schnecke.webp";
import img01 from "../../assets/images/tattoo-blumen.webp";
import img02 from "../../assets/images/tattoo-schädel.webp";
import img03 from "../../assets/images/tattoo-waschbär.webp";
import img04 from "../../assets/images/tattoo-blumen-01.webp";
import img05 from "../../assets/images/tattoo-hirsch.webp";
import img06 from "../../assets/images/piercing-ohr.webp";


const Team = () => {

    const teamInfo = [
        {name: "Angi", imgPerson: imgPerson00, pronouns: "sie/ihr", instagram: "toller/link", position: "Tattoo, Azubi und Shopmanagerin", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Ani", imgPerson: imgPerson08, pronouns: "sie/ihr", instagram: "toller/link", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Elise", imgPerson: imgPerson02, pronouns: "sie/ihr", instagram: "toller/link", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Elliot", imgPerson: imgPerson03, pronouns: "er/ihm", instagram: "toller/link", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Kathi", imgPerson: imgPerson04, pronouns: "sie/ihr", instagram: "toller/link", position: "Tattoo und Piercing", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Shino", imgPerson: imgPerson05, pronouns: "sie/they/er", instagram: "toller/link", position: "Tattoo Azubi", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Lydia", imgPerson: imgPerson06, pronouns: "sie/ihr", instagram: "toller/link", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Mareike", imgPerson: imgPerson07, pronouns: "sie/ihr", instagram: "toller/link", position: "Tattoo", imgArray:
        [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Slim", imgPerson: imgPerson08, pronouns: "sie/ihnen", instagram: "toller/link", position: "Piercing", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        },
        {name: "Toni", imgPerson: imgPerson09, pronouns: "sie/ihr", instagram: "toller/link", position: "Tattoo", imgArray:
            [img00, img01, img02, img03, img04, img05, img06]
        }
    ];

    return (
        <section className="team" id="team">
            <h2 className="header--medium team__header">Unser Team</h2>
            <div className="team-wrapper">
                <div className="team-scroller">
                    {teamInfo.map(x => {
                        return (
                            <Artist
                                key={"key-" + x.name.toLowerCase()}
                                name={x.name}
                                imgPerson={x.imgPerson}
                                pronouns={x.pronouns}
                                instagram={x.instagram}
                                position={x.position}
                                imgArray={x.imgArray}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Team;