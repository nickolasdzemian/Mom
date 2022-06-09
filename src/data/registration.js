import {url} from './env';
import {Alert } from "react-native";
import {childsData} from "../storage/childs";

export async function registration(childObj, oauth, nav, route) {
    const URL = url + 'child/register';
    const childs = await childsData.get('childs');
    async function created(json) {
        const newChilds = childs ? [...childs, {c: json.data}] : [{c: json.data}];
        nav.navigate(route);
        await childsData.set('childs', newChilds);
    }
    console.log(childs);
    try {
        const response = await fetch(
            URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': oauth ? `Bearer ${oauth.token}` : null,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: childObj.name,
                    birthday: childObj.date,
                    gender: childObj.gender,
                  })
            }
          );
        const json = await response.json(); 
        json?.errors ? Alert.alert(
            "Ошибка",
            json.errors?.name ? "Имя: " + json.errors.name : null +
            json.errors?.birthday ? "Дата рождения: " + json.errors.birthday : null +
            json.errors?.gender ? "Пол: " + json.errors.gender : null,
            [
              { text: "OK" }
            ]
          ) : created(json);
        
        console.log(json);
    }
    catch (e) {
        alert(String(e));
        console.warn(e);
    }
}