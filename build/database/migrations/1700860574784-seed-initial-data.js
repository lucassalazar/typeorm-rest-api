"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedInitialData1700860574784 = void 0;
class SeedInitialData1700860574784 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("INSERT IGNORE INTO authors (id, name, email, bio, image) VALUES \n" +
                "      (1, 'Ludwig Von Mises', 'ludwig@lvm.institute.com', 'Ludwig Heinrich Edler von Mises; 29 September 1881 – 10 October 1973) was an Austrian–American[2] Austrian School economist, historian, logician, and sociologist. Mises wrote and lectured extensively on the societal contributions of classical liberalism and the power of consumers.', 'ludwig.jpg'), \n" +
                "      (2, 'Fyodor Dostoevsky', 'fyodor@blyat.com', 'Fyodor Mikhailovich Dostoevsky, sometimes transliterated as Dostoyevsky, was a Russian novelist, short story writer, essayist and journalist. Numerous literary critics regard him as one of the greatest novelists in all of world literature, as many of his works are considered highly influential masterpieces.', 'fyodor.jpg'), \n" +
                "      (3, 'Jorge Luis Borges', 'jorge@ficciones.com', 'Jorge Francisco Isidoro Luis Borges Acevedo (/ˈbɔːrhɛs/ BOR-hess,[2] Spanish: [ˈxoɾxe ˈlwis ˈβoɾxes] ⓘ; 24 August 1899 – 14 June 1986) was an Argentine short-story writer, essayist, poet and translator regarded as a key figure in Spanish-language and international literature.', 'borges.jpg');");
            yield queryRunner.query("INSERT IGNORE INTO books (id, title, description, price, authorId, category, image) VALUES \n" +
                "      (1, 'Human Action: The Scholar''s Edition', 'Human Action: A Treatise on Economics is the most important book on political economy you will ever own. It was (and remains) the most comprehensive, systematic, forthright, and powerful defense of the economics of liberty ever written. This is the Scholars Edition: accept no substitute. You will treasure this volume.', 19.95, 1, 'Economics', 'human_action.jpg'), \n" +
                "      (2, 'The Karamazov Brothers', 'Dostoevsky''s last and greatest novel, The Karamazov Brothers (1880) is both a brilliantly told crime story and a passionate philosophical debate.', 13.37, 2, 'Psychological Fiction', 'karamazov_brothers.jpg'), \n" +
                "      (3, 'The Library of Babel', 'The Library of Babel is a short story written by the Argentine author Jorge Luis Borges. It was first published in 1941. The story is a philosophical and metaphysical exploration that imagines an infinite library containing every possible book with every possible combination of letters and symbols.', 12.97, 3, 'Philosophical Fiction', 'library_of_babel.jpg');");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DELETE FROM books`);
            yield queryRunner.query(`DELETE FROM authors`);
        });
    }
}
exports.SeedInitialData1700860574784 = SeedInitialData1700860574784;
