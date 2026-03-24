import imageAnne from "../assets/avatars/image-anne.jpg";
import imageElijah from "../assets/avatars/image-elijah.jpg";
import imageGeorge from "../assets/avatars/image-george.jpg";
import imageJackson from "../assets/avatars/image-jackson.jpg";
import imageJames from "../assets/avatars/image-james.jpg";
import imageJavier from "../assets/avatars/image-javier.jpg";
import imageJudah from "../assets/avatars/image-judah.jpg";
import imageRoxanne from "../assets/avatars/image-roxanne.jpg";
import imageRyan from "../assets/avatars/image-ryan.jpg";
import imageSuzanne from "../assets/avatars/image-suzanne.jpg";
import imageThomas from "../assets/avatars/image-thomas.jpg";
import imageVictoria from "../assets/avatars/image-victoria.jpg";
import imageZena from "../assets/avatars/image-zena.jpg";

const avatarMap = {
  "./assets/avatars/image-anne.jpg": imageAnne,
  "./assets/avatars/image-elijah.jpg": imageElijah,
  "./assets/avatars/image-george.jpg": imageGeorge,
  "./assets/avatars/image-jackson.jpg": imageJackson,
  "./assets/avatars/image-james.jpg": imageJames,
  "./assets/avatars/image-javier.jpg": imageJavier,
  "./assets/avatars/image-judah.jpg": imageJudah,
  "./assets/avatars/image-roxanne.jpg": imageRoxanne,
  "./assets/avatars/image-ryan.jpg": imageRyan,
  "./assets/avatars/image-suzanne.jpg": imageSuzanne,
  "./assets/avatars/image-thomas.jpg": imageThomas,
  "./assets/avatars/image-victoria.jpg": imageVictoria,
  "./assets/avatars/image-zena.jpg": imageZena,
};

export function resolveAvatar(path) {
  return avatarMap[path] ?? path;
}
