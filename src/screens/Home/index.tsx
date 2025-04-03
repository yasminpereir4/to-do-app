import { Fragment, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (tasks.includes(participantName)) {
      return Alert.alert(
        "Comunicado",
        "Já existe um participante na lista com este nome.",
      );
    }
    setTasks(prevState => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Atenção", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks(prevState =>
            prevState.filter(participant => participant !== name),
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.box} />

      <View style={{ padding: 24, marginTop: -170 }}>
        <View style={{ alignItems: "center", marginTop: 44 }}>
          <Image source={require("../assets/Logo.png")} />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#6B6B6B"}
            value={participantName}
            onChangeText={setParticipantName}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Text style={styles.tasksCreatedLabel}>Criadas</Text>
            <View style={styles.numberTasksContainer}>
              <Text style={styles.tasksCreatedNumberLabel}>{tasks.length}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Text style={styles.tasksCreatedLabel}>Concluídas</Text>
            <View style={styles.numberTasksContainer}>
              <Text style={styles.tasksCreatedNumberLabel}>{tasks.length}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <Fragment>
                <View
                  style={{
                    width: "auto",
                    height: 2,
                    marginTop: 20,
                    backgroundColor: "#333333",
                  }}
                />
                <View style={{ alignItems: "center", padding: 48 }}>
                  <Image source={require("../assets/Clipboard.png")} />
                  <Text style={styles.listEmptyText}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.listEmptyTextSecondary}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              </Fragment>
            );
          }}
          renderItem={({ item }) => {
            return (
              <Participant
                key={item}
                name={item}
                isChecked={isChecked}
                onCheck={() => setIsChecked(true)}
                onRemove={() => handleParticipantRemove(item)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
