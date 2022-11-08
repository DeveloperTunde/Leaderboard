import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderSearchBar from '../layouts/HeaderSearchBar';
import style from '../styles/style';
import CustomStatusBar from '../layouts/StatusBar'
import { Data } from '../data/data';
import { Colors } from '../constant/Colors';
import CustomModal from '../ui/Modal'

const Home = () => {
    const [value, setValue] = useState(null);
    const [searchUserKey, setSearchUserKey] = useState('')
    const [searchData, setSearchData] = useState([])
    const [isShowingModal, setIsShowingModal] = useState(false)
      
    useEffect(() => {
        if(value !=null && value !=''){
            setSearchData([]);
            //Get Top Ten Users
            const tempData = Object.keys(Data).map(function(key) {
                            return { key: key, value: this[key].bananas };
                        }, Data);
              tempData.sort(function(p1, p2) { return p2.value - p1.value; });
             const rankedData = tempData.map((datum, index)=> {return { key: datum.key, value: datum.value, rank: index + 1} } )
             const topTenData = rankedData.slice(0, 10); 
            
            
            //Get Searched User Key
            const searchUser = Object.keys(Data).filter(key => Data[key].name.replace(/\s/g, "") == value);
            const searchUserRankTemp = rankedData.filter((filtered)=> filtered.key == searchUser);
            const searchUserRank = (searchUserRankTemp[0])?searchUserRankTemp[0]['rank']:'';
            setSearchUserKey(searchUser);
            if(searchUser.length > 0){
                const userExist = topTenData.filter(top=> top.key == searchUser );
                if(userExist.length > 0){
                    setSearchData(topTenData)
                }else{
                    const lastUser = topTenData.slice(-1);
                    const lastUserKey = lastUser[0]['key'];

                    const newTopTen = topTenData.map(obj => {
                        if (obj.key === lastUserKey) {
                          return {key: searchUser[0], value: Data[searchUser].bananas, rank:searchUserRank };
                        }
                        return obj;
                      });
                   console.log('newTopTen', newTopTen)
                    setSearchData(newTopTen)
                }
            }else{
                setSearchData(null)
                setIsShowingModal(true)
            }

        }
        
    }, [value])
    

    function handleCloseModal(){
        setIsShowingModal(false)
    }
                
    
    return (
        <View style={style.screen_container}>
            <CustomStatusBar 
                    backgroundColor={'transparent'}
                    barStyle={'light-content'}
                />
            <HeaderSearchBar handleSearch={(value)=> setValue(value.replace(/\s/g, ""))}/>
            <View style={style.table_wrapper}>
                <View style={style.table_head}>
                    <Text style={[style.table_column, style.text2]}>Name</Text>
                    <Text style={[style.table_column, style.text2]}>Rank</Text>
                    <Text style={[style.table_column, style.text2]}>Number of bananas</Text>
                    <Text style={[style.table_column, style.text2]}>isSearchedUser?</Text>
                </View>

                {
                searchData?.map((search, index)=>{
                    const thekey= search.key;
                    return(
                        <View style={[style.table_body, Data[thekey].uid == searchUserKey &&{backgroundColor: Colors.tertiary}]} key={thekey}>
                            <Text style={[style.table_column, style.text2, Data[thekey].uid == searchUserKey &&{color: Colors.primary}]}>{Data[thekey].name}</Text>
                            <Text style={[style.table_column, style.text2]}>{search?.rank}</Text>
                            <Text style={[style.table_column, style.text2]}>{Data[thekey].bananas}</Text>
                            <Text style={[style.table_column, style.text2]}>{(Data[thekey].uid == searchUserKey)?'true':'false'}</Text>
                        </View>
                    )
                })
            }
                
            </View>

            
              {
                  isShowingModal && <CustomModal handleCloseModal={()=> handleCloseModal()} />
              }
            
        </View>
    );
};




export default Home;
