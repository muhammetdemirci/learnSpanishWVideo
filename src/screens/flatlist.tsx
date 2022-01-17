import { Text } from "../components";
import { FlatList } from "react-native";

export interface Ty {
    title: string
}

export function A() {
    return (<FlatList<Ty>
        data={[{ title: "A" }, { title: "B" }]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text fontFamily={"regular13"}>
            {item.title}
        </Text>}
    />)
}