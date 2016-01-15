'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    general: {
        hogarth_producer: {
            type: String
        },
        hogarth_account: {
            type: String
        },
        project_name: {
            type: String
        },
        project_number: {
            type: Number
        },
        intended_markets: {
            type: [String]
        },
        delivered_via: {
            type: String
        },
        arrival_date: {
            type: Date
        },
        post_house_contact: {
            type: String
        },
        post_house_address: {
            type: String
        },
        assets_expected_for_qc: {
            video_files: {
                type: Boolean
            },
            artwork_pack_shots: {
                type: Boolean
            },
            after_effects_projects: {
                type: Boolean
            },
            protools_sessions: {
                type: Boolean
            },
            audio_files: {
                type: Boolean
            },
            flame_archive: {
                type: Boolean
            },
            nuke_setup: {
                type: Boolean
            },
            three_d_projects: {
                type: Boolean
            },
            other: {
                true_false: {
                    type: Boolean
                },
                full_detail: {
                    type: String
                }
            }
        }
    },
    video_files: [{
        job_number: {
            type: Number
        },
        qc_operator: {
            type: String
        },
        date: {
            type: Date
        },
        total_files_received: {
            type: Number
        },
        codecs: {
            type: [String]
        },
        frame_rates: {
            type: [String]
        },
        standards: {
            type: [String]
        },
        aspect_ratios: {
            type: [String]
        },
        durations: {
            type: [Number]
        },
        title_safety: {
            type: [String]
        },
        master: {
            type: Boolean
        },
        generic: {
            type: Boolean
        },
        master_no_legals: {
            type: Boolean
        },
        notes: {
            type: String
        },
        pass_fail: {
            type: String
        }
    }],
    audio: [{
        job_number: {
            type: Number
        },
        qc_operator: {
            type: String
        },
        date: {
            type: [Date]
        },
        file_type: {
            type: String
        },
        full_mix: {
            included: {
                type: Boolean
            },
            mono_stereo: {
                type: String
            },
            twelve_frame_mute: {
                type: Boolean
            },
            sample_rate: {
                type: String
            },
        },
        splits: {
            included: {
                type: Boolean
            },
            mono_stereo: {
                type: String
            },
            twelve_frame_mute: {
                type: Boolean
            },
            sample_rate: {
                type: String
            },
        },
        five_one_mix: {
            included: {
                type: Boolean
            },
            twelve_frame_mute: {
                type: Boolean
            },
            sample_rate: {
                type: String
            },
        },
        notes: {
            type: String
        },
        pass_fail: {
            type: String
        },
    }],
    after_effects: [{
        job_number: {
            type: Number
        },
        ae_operator: {
            type: String
        },
        date: {
            type: Date
        },
        is_project_organized: {
            yes_no:{
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_there_missing_plugins: {
            yes_no:{
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_all_relevant_comps_editable: {
            yes_no:{
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_there_master_conforms: {
            type: Boolean
        },
        are_there_master_renders: {
            type: Boolean
        },
        are_there_generic_renders: {
            type: Boolean
        },
        frame_rates: {
            type: [String]
        },
        pass_fail: {
            type: Boolean
        }
    }],
    flame: [{
        job_number: {
            type: Number
        },
        flame_operator: {
            type: String
        },
        date: {
            type: Date
        },
        is_project_organized: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        were_setups_provided: {
                type: Boolean
            },
        if_yes_what_format: {
                type: String
            },
        are_setups_organized: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_there_missing_plugins: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_all_relevant_comps_editable: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_there_master_conforms: {
            type: Boolean
        },
        are_there_master_renders: {
            type: Boolean
        },
        are_there_generic_renders: {
            type: Boolean
        },
        frame_rates: {
            type: [String]
        },
        notes: {
            type: String
        },
        pass_fail: {
            type: String
        }
    }],
    three_d: {
        job_number: {
            type: Number
        },
        three_d_operator: {
            type: String
        },
        date: {
            type: Date
        },
        are_all_labels_clearly_labeled: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_all_relevant_builds_editable: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_there_missing_plugins: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_there_missing_textures: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        frame_rates: {
            type: [String]
        },
        notes: {
            type: String
        },
        pass_fail: {
            type: String
        }
    },
    nuke_projects: {
        job_number: {
            type: Number
        },
        nuke_operator: {
            type: String
        },
        date: {
            type: Date
        },
        are_all_setups_clearly_labeled: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_all_relevant_comps_editable: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_there_missing_plugins: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        are_there_missing_fonts: {
            yes_no: {
                type: Boolean
            },
            notes: {
                type: String
            }
        },
        frame_rates: {
            type: [String]
        },
        notes: {
            type: String
        },
        pass_fail: {
            type: String
        }
    }


})

mongoose.model('Reports', schema)