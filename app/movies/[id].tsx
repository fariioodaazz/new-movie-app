import { View, Text, ScrollView ,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import useFetch from '@/services/useFetch'
import { fetchMovieDetails } from '@/services/api'
import { icons } from '@/constants/icons'
import { useRouter } from 'expo-router'

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => {
  if (!value) return null;

  return (
    <View className="mt-3">
      <Text className="text-light-200 text-sm font-normal">{label}</Text>
      <Text className="text-white text-sm font-bold mt-2">
        {value}
      </Text>
    </View>
  );
};


const MovieDetails = () => {
  const {id} = useLocalSearchParams();
  const {data: movie, loading, error } = useFetch(() => fetchMovieDetails(id as string));
  const router = useRouter();
  console.log("Overview:", movie?.overview);
  return (
    <View className='flex-1 bg-primary'>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
            style={{ width: '100%', height: 550 }}
            resizeMode="stretch" 
          />
          
        </View>
        <View className='flex-col items-start justify-center px-5 mt-5'>
          <Text className='text-white text-xl font-bold'>
            {movie?.title}
          </Text>
          <View className='flex-row items-start gap-x-1 mt-2'>
            <Text className='text-light-200 text-sm'>
              {movie?.release_date?.split('-')[0]} -
            </Text>
            <Text className='text-light-200 text-sm'>
              {movie?.runtime} m
            </Text>
          </View>
          <View 
          className=' bg-dark-200 flex-row items-center px-2 py-1 rounded-lg mt-2 gap-x-1'
          style={{ alignSelf: 'flex-start' }}
          >
            <Image
              source={icons.star}
              className='size-4'
            />
            <Text className='text-light-200 text-sm px-1'>
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className='text-light-200 text-sm px-1'>
              ({movie?.vote_count} votes)
            </Text>
          </View>
          <MovieInfo label="Overview" value={movie?.overview} />
          <MovieInfo label="Original Language" value={movie?.original_language?.toUpperCase()} />
          <MovieInfo label="Genres" value={movie?.genres?.map((genre: any) => genre.name).join(', ') || 'N/A'} />
          <View className='flex-row justify-between w-1/2 '>
            <MovieInfo label="Budget" value={`$${movie?.budget.toLocaleString()}`} />
            <MovieInfo label="Revenue" value={`$${movie?.revenue.toLocaleString()}`} />
          </View>
          <MovieInfo label="Production Companies" value={movie?.production_companies?.map((company: any) => company.name).join(', ') || 'N/A'} />
        </View>

      </ScrollView>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: '#AB8BFF',
          paddingVertical: 14,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;