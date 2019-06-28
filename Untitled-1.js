<View style={{flexDirection:'row',marginTop:10}}>
          <Text style={{marginLeft:5,fontSize:16,color:'black',marginRight:40}}>Molar İlişkisi</Text>
          <View style={{flex:1,flexDirection:'row'}}></View>
          <Text style={{fontSize:16,color:'black'}}>Koru</Text>
          
          <CheckBox
            style={{flex: 1, padding:1,marginRight:50}}
            onClick={()=>{
              this.setState({
                isChecked_Molar_İliskisi_koru:true,
                isChecked_Molar_İliskisi_iyilestir:false,
                Molar_iliskisi:'1'
              })
            }}
          isChecked={this.state.isChecked_Molar_İliskisi_koru}
          
          />      
          <Text style={{marginLeft:-50,fontSize:16,color:'black'}}>İyileştir</Text>   
           <CheckBox
          style={{flex: 1, padding:1,marginRight:20,}}
          onClick={()=>{
            this.setState({
              isChecked_Molar_İliskisi_iyilestir:true,
              isChecked_Molar_İliskisi_koru:false,
              Molar_iliskisi:'2'
            })
          }}
        isChecked={this.state.isChecked_Molar_İliskisi_iyilestir}
        
        />