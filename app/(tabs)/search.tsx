import { View, Text ,Image, FlatList, ActivityIndicator} from 'react-native'
import {images} from '@/constants/images'
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';
import { useState ,useEffect} from 'react';
import { updateSearchCount } from '@/services/appwrite';

const search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data : movies , loading: movieLoading, error: movieError ,refetch:loadMovies ,reset} = useFetch(() => fetchMovies({query : searchQuery}),false);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timeoutID);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() && movies?.length > 0 && movies?.[0]) {
      updateSearchCount(searchQuery, movies[0]);
    }
  }, [movies]);

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute w-full z-0' resizeMode='cover'/>
      <FlatList 
        data={movies}
        renderItem={({ item }) => (
          <MovieCard {...item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        className="px-5"
        contentContainerStyle={{paddingBottom: 100 }}
        ListHeaderComponent={
          <>
          <View className='w-full flex-row justify-center items-center mt-20'>
             <Image source={icons.logo} className="w-12 h-10" />
          </View>
          <View className='my-5'>
            <SearchBar
              placeholder="Search for a movie"
              value={searchQuery}
              onChangeText={(text :string) => setSearchQuery(text)}
            />
          </View>
          { movieLoading && (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              className='my-3'
            />
          )}
          { movieError && (
            <Text className='text-gray-500 text-center my-3 px-5'>
              {searchQuery.trim()
                ? `No results found for "${searchQuery}"`
                : 'Search for a movie'}
            </Text>
          )}
          { !movieLoading && !movieError && movies?.length > 0 && searchQuery.trim() && (
            <Text className='text-white text-xl font-bold mb-4'>
              Search results for {' '}
              <Text className='text-accent text-center my-3 px-5'>
                {searchQuery}
              </Text>
            </Text>
          )}
          </>
        }
        ListEmptyComponent={
          !movieLoading && !movieError ? (
            <Text className='text-gray-500 text-center my-3 px-5'>
              {searchQuery.trim()
                ? `No results found for "${searchQuery}"`
                : 'Search for a movie'}
            </Text>
          ) : null
        }
      />
    </View>
  )
}

export default search