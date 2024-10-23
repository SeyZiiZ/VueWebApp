<template>
    <div class="card">
        <Accordion value="0">
            <AccordionPanel value="0">
                <AccordionHeader>Qui sommes nous ?</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Bienvenue chez <strong>Valentin Automobile</strong>, l'agence de location de voitures de sport de référence pour les passionnés d'automobiles d'exception. Nous vous offrons une expérience unique en vous permettant de prendre le volant des modèles les plus prestigieux du marché, alliant performance, élégance et technologie de pointe.
                        Notre mission est simple : vous permettre de vivre des sensations incomparables au volant de voitures légendaires. Que vous souhaitiez réaliser un rêve, rendre un événement inoubliable, ou simplement goûter au plaisir de conduire des véhicules de haute performance, nous avons le modèle qui correspond à vos envies.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Pourquoi nous ?</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Un large choix de véhicules premium : De la puissance brute des supercars aux lignes élégantes des voitures de luxe, nous proposons une flotte de véhicules soigneusement sélectionnés parmi les marques les plus prestigieuses comme Ferrari, Lamborghini, Porsche, et bien plus encore.<br><br>
                        Une expérience client sur mesure : Nous mettons un point d'honneur à offrir un service personnalisé qui répond à vos besoins spécifiques, que ce soit pour une location courte durée, un week-end d'évasion ou un événement spécial.<br><br>
                        Professionnalisme et sécurité : Chaque véhicule est parfaitement entretenu pour garantir une expérience de conduite irréprochable. Votre sécurité est notre priorité, et nous nous assurons que chaque détail est pris en compte pour que vous puissiez profiter pleinement de votre moment.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Nous rejoindre ?</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Rejoignez-nous et venez découvrir un nouveau style de conduite. Avec <strong>Valentin Automobile</strong>, chaque route devient une aventure, et chaque virage une montée d'adrénaline <router-link to="/register"><span class="getRegister">Inscrivez-vous ici</span></router-link>.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>

<style scoped>
.getRegister {
    color: #508C31;
}
</style>