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
  const [taskTitle, setTaskTitle] = useState("");
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});

  function handleTaskAdd() {
    if (tasks.includes(taskTitle)) {
      return Alert.alert(
        "Comunicado",
        "Já existe uma tarefa na lista com este título.",
      );
    }
    setTasks(prevState => [...prevState, taskTitle]);
    setTaskTitle("");
  }

  function handleTaskRemove(task: string) {
    Alert.alert("Atenção", `Deseja remover a tarefa ${task}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks(prevState => prevState.filter(t => t !== task));

          // Remover a tarefa da lista de concluídas
          setCheckedTasks(prevState => {
            const updatedTasks = { ...prevState };
            delete updatedTasks[task]; // Remove do estado de concluídas
            return updatedTasks;
          });
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleCheckTask(task: string) {
    setCheckedTasks(prevState => ({
      ...prevState,
      [task]: !prevState[task],
    }));
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
            value={taskTitle}
            onChangeText={setTaskTitle}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
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
              <Text style={styles.tasksCreatedNumberLabel}>
                {Object.values(checkedTasks).filter(Boolean).length}
              </Text>
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
                isChecked={checkedTasks[item] || false} // Verifica se a tarefa está concluída
                onCheck={() => handleCheckTask(item)}
                onRemove={() => handleTaskRemove(item)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
