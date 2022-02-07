import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './JobCard.styles';

function JobCard({ job, onSelected }) {

    return (
        <TouchableOpacity onPress={onSelected}>

            <View style={styles.container}>
                <Text style={styles.title}>{job.name}</Text>

                <Text style={styles.company_name}>{job.company.name}</Text>

                <View style={styles.job_location_view}>
                    <Text style={styles.job_location_title}>{job.locations && job.locations.length > 0
                        ? job.locations[0].name
                        : 'No information'}
                    </Text>
                </View>

                <View style={styles.job_level_view}>
                    <Text style={styles.job_level_title}>{job.levels && job.levels.length > 0
                        ? job.levels[0].name
                        : 'No information'}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}
export default JobCard;