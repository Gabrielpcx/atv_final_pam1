import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const livros = [
    {
        codigo_livro:1,
        titulo_livro: 'Homem Aranha',
        desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
        imagem_livro:require('../assets/imagens/hq/hq_1.jpg'),
    },
    {
        codigo_livro:1,
        titulo_livro: 'Avengers',
        desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
        imagem_livro:require('../assets/imagens/hq/hq_2.jpg'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'Superman',
      desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/hq/hq_3.jpg'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'Harry Potter',
      desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/hq/hq_4.jpg'),
    },
    {
    codigo_livro:1,
    titulo_livro: 'Lendas',
    desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
    imagem_livro:require('../assets/imagens/hq/hq_5.jpg'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'Clean Code',
      desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/progamacao/progamacao_1.jpg'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'Como ser um progamador melhor',
      desc_livro:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/progamacao/progamacao_2.jpg'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'Algoritimos e Progamação',
      desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/progamacao/progamacao_3.jpg'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'Introdução à linguagem SQL',
      desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/progamacao/progamacao_4.jpg'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'O vilarejo',
      desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/terror/terror_1.webp'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'O bazar dos sonhos ruins',
      desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/terror/terror_2.jpg'),
    },
    {
      codigo_livro:1,
      titulo_livro: 'Uma noite de terror',
      desc_livro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_livro:require('../assets/imagens/terror/terror_3.webp'),
    },


];

const livroItem = ({item}) => { return (
    <View style={styles.livro_container}>
    <Image
      style={styles.livro_image}
      source={item.imagem_livro}
    />
  <View styles={styles.livro_text_container}>
    <Text style={styles.livro_data}>{item.titulo_livro}</Text>

    <Text style={styles.livro_desc}>{item.desc_livro}</Text>
  
    <TouchableOpacity style={styles.livro_button_details}>
      <Text style={styles.livro_button_text}>ASSISTIR</Text>
  
    </TouchableOpacity>

    <TouchableOpacity style={styles.livro_button_details}>
      <Text style={styles.livro_button_text}>DETALHES</Text>
  
    </TouchableOpacity>
  
  
  </View>
    </View>
    )
  }

  export default function Livro() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={livros}
          renderItem={livroItem}
          ListEmptyComponent={<Text>A LISTA DE livroS ESTÁ VAZIA</Text>}
          keyExtractor={livros => livros.codigo_livro}
      />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171718',
        alignItems: 'center',
        justifyContent: 'center',
    },
    livro_container:{
        flex:1,
        flexDirection:'row',
        padding:15,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#3c3c3c',
        marginBottom:10,
        marginTop:10,
        backgroundColor:'#515151',
        width: 350,
        
    },
    livro_image:{
        width:120,
        height:220,
        marginRight:10,
        marginBottom:10,
    },
    livro_text_container:{
        width:20,
        justifyContent:'center',
    },
    livro_data:{
        fontSize:19,
        fontWeight:'600',
        width:150,
        textAlign:'Left',
        marginLeft:16,
        color: '#fff',
        
    },
    livro_desc: {
        fontSize:12,
        width:150,
        marginLeft:10,
        marginTop:5,
        fontWeight:'600',
        textAlign:'justify',
        color: '#fff',

    },
    livro_button_details:{
        alignItems: 'center',
        backgroundColor: '#1550b0',
        padding: 10,
        borderRadius:5,
        marginTop:10,
        width:150,
        marginLeft:20,
        
    },
    livro_button_text:{
        color:'#FFF',
        fontSize:16,
        fontWeight:'bold',
    },
  });